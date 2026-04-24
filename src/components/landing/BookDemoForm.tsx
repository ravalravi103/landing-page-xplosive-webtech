import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const schema = z.object({
    name: z.string().min(2, "Name is required"),
    phone: z.string().min(10, "Valid phone required"),
    course: z.string().min(2, "Select course"),
});

type FormData = z.infer<typeof schema>;

export default function BookDemoForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        try {
            await fetch("YOUR_GOOGLE_SCRIPT_URL", {
                method: "POST",
                body: JSON.stringify(data),
            });

            toast.success("Demo booked! We will contact you shortly.");

            reset();

            // WhatsApp redirect
            window.open(
                `https://wa.me/91XXXXXXXXXX?text=Hi, I booked a demo`,
                "_blank"
            );
        } catch (error) {
            toast.error("Something went wrong!");
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Book Free Demo</Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Book Your Free Demo</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <Input placeholder="Your Name" {...register("name")} />
                        {errors.name && (
                            <p className="text-red-500 text-sm">{errors.name.message}</p>
                        )}
                    </div>

                    <div>
                        <Input placeholder="Phone Number" {...register("phone")} />
                        {errors.phone && (
                            <p className="text-red-500 text-sm">{errors.phone.message}</p>
                        )}
                    </div>

                    <div>
                        <Input placeholder="Course Interested" {...register("course")} />
                        {errors.course && (
                            <p className="text-red-500 text-sm">{errors.course.message}</p>
                        )}
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full">
                        {isSubmitting ? "Submitting..." : "Book Demo"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}