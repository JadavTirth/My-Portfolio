
import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };


  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault(); // Prevent default form submission

  //   // Basic validation check (optional but recommended)
  //   if (!formData.name || !formData.email  || !formData.message) {
  //       toast({
  //           title: "Error",
  //           description: "Please fill out all fields.",
  //           variant: "destructive",
  //       });
  //       return; // Stop submission if fields are missing
  //   }

  //   setIsSubmitting(true); // Indicate processing

  //   // --- WhatsApp Link Logic ---
  //   // 1. **REPLACE THIS** with your WhatsApp phone number (include country code, no '+', no spaces, no leading zeros if country code is present)
  //   const yourPhoneNumber = "9510332132"; // Example: 919510398098 for India, 15551234567 for US

  //   // 2. Construct the message using the form data
  //   const messageBody = `Hello, I'm contacting you from your website.\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n\n*Message:*\n${formData.message}`;

  //   // 3. URL-encode the message for the WhatsApp link
  //   const encodedMessage = encodeURIComponent(messageBody);

  //   // 4. Create the full WhatsApp link
  //   const whatsappLink = `https://wa.me/${yourPhoneNumber}?text=${encodedMessage}`;

  //   // 5. Open the link in a new tab/window
  //   window.open(whatsappLink, '_blank', 'noopener,noreferrer');
  //   // --- End WhatsApp Link Logic ---


  //   // Give feedback to the user
  //   toast({
  //     title: "Opening WhatsApp...",
  //     description: "Please confirm and send the message in WhatsApp.",
  //   });

  //   // Reset the form fields after attempting to open WhatsApp
  //   setFormData({
  //     name: "",
  //     email: "",
  //     message: "",
  //   });

  //   setIsSubmitting(false); // Re-enable the button
  // };

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Contact Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
          <p className="text-gray-600 mb-8">
            Feel free to contact me for any work or suggestions. I'm always open
            to discussing new projects, creative ideas, or opportunities to be
            part of your vision.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a href="tel:+919510332132" className="text-gray-600 hover:text-primary">
                  +91-9510332132
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:tirth.jadav04@gmail.com"
                  className="text-gray-600 hover:text-primary"
                >
                  tirth.jadav04@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>
            </div>
            
        
            
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows={6}
                required
              />
            </div>
            
            <Button type="submit" disabled={isSubmitting} className="w-full bg-green-500 dark:bg-green-500 hover:bg-green-300 hover:text-gray-800  dark:hover:bg-green-700 dark:hover:text-gray-100">
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send size={16} className="mr-2 " /> Whatsapp me
                </>
              )}
            </Button>
          </form>
        </div> */}
      </div>
    </section>
  );
}
