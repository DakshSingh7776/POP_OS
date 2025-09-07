"use client";

import * as React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { generateTheme } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Wand2, Loader2, Clipboard } from "lucide-react";

const themeFormSchema = z.object({
  themePrompt: z
    .string()
    .min(5, "Your prompt is too short. Try to be more descriptive!")
    .max(100, "Your prompt is too long. Try to be more concise!"),
});

type ThemeFormValues = z.infer<typeof themeFormSchema>;

interface ThemeResult {
  colorPalette: string[];
  visualStyles: string;
}

export function ThemeGenerator() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [result, setResult] = React.useState<ThemeResult | null>(null);
  const { toast } = useToast();

  const form = useForm<ThemeFormValues>({
    resolver: zodResolver(themeFormSchema),
    defaultValues: {
      themePrompt: "",
    },
  });

  const onSubmit: SubmitHandler<ThemeFormValues> = async (data) => {
    setIsLoading(true);
    setResult(null);
    try {
      const themeResult = await generateTheme(data);
      setResult(themeResult);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description:
          error instanceof Error ? error.message : "Failed to generate theme.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
        title: "Copied to clipboard!",
        description: text,
    });
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-2xl">
              <Wand2 className="w-6 h-6 text-primary" />
              AI-Powered Theming Tool
            </CardTitle>
            <CardDescription>
              Describe a brand, mood, or style, and let AI generate a custom
              theme variation for you.
            </CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent>
                <FormField
                  control={form.control}
                  name="themePrompt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Theme Prompt</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., 'A retro 80s synthwave theme' or 'Minimalist, inspired by Scandinavian design'"
                          {...field}
                          rows={3}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Wand2 className="mr-2 h-4 w-4" />
                  )}
                  Generate Theme
                </Button>
              </CardFooter>
            </form>
          </Form>

          {isLoading && (
            <div className="p-6 text-center">
              <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
              <p className="mt-2 text-muted-foreground">
                Conjuring up your theme...
              </p>
            </div>
          )}

          {result && (
            <div className="p-6 border-t">
              <h3 className="text-lg font-semibold font-headline mb-4">Generated Theme</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Color Palette</h4>
                  <div className="flex flex-wrap gap-2">
                    {result.colorPalette.map((color, index) => (
                      <div key={index} className="group relative">
                        <div
                          className="h-16 w-16 rounded-md border"
                          style={{ backgroundColor: color }}
                        />
                        <button onClick={() => copyToClipboard(color)} className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-md">
                            <Clipboard className="w-6 h-6 text-white"/>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Visual Style Suggestions</h4>
                  <p className="text-muted-foreground">{result.visualStyles}</p>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}
