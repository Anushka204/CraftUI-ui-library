import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface FAQItemProps {
    question: string;
    answer: string;
    category?: string;
}

function FAQItem({ question, answer, category }: FAQItemProps) {
    return (
        <AccordionItem
            value={question}
            className="mb-4 bg-white dark:bg-black/5 rounded-xl border border-gray-100 dark:border-gray-800/60 shadow-xs dark:shadow-black/10"
        >
            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline data-[state=open]:border-b data-[state=open]:border-gray-100 dark:data-[state=open]:border-gray-800/60">
                <div className="flex flex-col gap-2">
                    {category && (
                        <Badge
                            variant="secondary"
                            className="w-fit text-xs font-normal dark:bg-black/10 dark:text-gray-300"
                        >
                            {category}
                        </Badge>
                    )}
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-200 group-hover:text-primary">
                        {question}
                    </h3>
                </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pt-4 pb-6">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {answer}
                </p>
            </AccordionContent>
        </AccordionItem>
    );
}

function Faq03() {
    const faqs: FAQItemProps[] = [
         {
            question: "How do I get started with Craft UI?",
            answer: "Just install it via npm or yarn, import the components you need, and start building shiny interfaces. Bonus points if you customize with Tailwind!",
            category: "Getting Started",
        },
        {
            question: "Can I use Craft UI with React and Next.js?",
            answer: "Absolutely! Craft UI plays nicely with React, Next.js, and even your late-night spaghetti code. Just import components and get designing!",
            category: "Integration",
        },
        {
            question: "Do I need to know advanced CSS to use Craft UI?",
            answer: "Not really! Most components work out-of-the-box, but if you love tweaking styles with Tailwind, you’ll feel like a wizard.",
            category: "Styling",
        },
        {
            question: "Is Craft UI free to use?",
            answer: "Yes! Perfect for students, side projects, or that late-night hackathon idea you totally didn’t procrastinate on.",
            category: "Pricing",
        },
        {
            question: "How do I contribute or suggest features?",
            answer: "Open a PR, file an issue, or just DM us your brilliant ideas. We love contributions — especially ones that include memes.",
            category: "Community",
        },
        {
            question: "Can Craft UI make my website look cooler than my roommate’s?",
            answer: "100%! With our ready-to-use components, gradients, and animations, your portfolio will officially be ‘envy of the dorm.’",
            category: "Fun",
        },
        {
            question: "Where can I find documentation?",
            answer: "Right here in the app! Our docs are interactive, easy to follow, and perfect for late-night coding sessions.",
            category: "Documentation",
        },
        {
            question: "What if I break something while experimenting?",
            answer: "No worries! Craft UI is designed to be resilient. Break stuff, learn stuff, and maybe fix your code before morning lectures.",
            category: "Troubleshooting",
        },
    ];

    return (
        <section className="py-16 w-full">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Find answers to common questions about our services
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} {...faq} />
                        ))}
                    </Accordion>

                    <div className="mt-12 text-center">
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Still have questions?
                        </p>
                        <button
                            type="button"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-lg"
                        >
                            Contact Support @anushka.sh2004@gmail.com
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq03;
