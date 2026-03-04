"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MessageSquare,
  Send,
  Globe,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "seratrix.cognition@gmail.com",
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setFormState("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset back to idle after 5 seconds to allow new message
      setTimeout(() => setFormState("idle"), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormState("error");
      setTimeout(() => setFormState("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <footer
      id="contact"
      className="relative bg-muted/30 dark:bg-background pt-32 pb-12 border-t border-border overflow-hidden transition-colors"
    >
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[120px] -mr-64 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24">
          {/* Left Side: Info & Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
              </span>
              Contact Us
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Ready to build the <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-cyan to-brand-blue">
                next generation?
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-12 max-w-lg leading-relaxed font-light">
              Whether you have a specific project in mind or just want to
              explore possibilities, our team is ready to help you navigate the
              future of intelligent systems.
            </p>

            <div className="space-y-8">
              <ContactInfoItem
                icon={<Mail className="w-5 h-5" />}
                title="Email Us"
                value="seratrix.cognition@gmail.com"
                href="mailto:seratrix.cognition@gmail.com"
              />
              <ContactInfoItem
                icon={<Globe className="w-5 h-5" />}
                title="Location"
                value="Kandy, Sri Lanka"
                href="https://maps.google.com"
              />
              <ContactInfoItem
                icon={<MessageSquare className="w-5 h-5" />}
                title="Chat with us"
                value="Twitter / LinkedIn"
                href="#"
              />
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="p-8 md:p-10 rounded-3xl bg-card border border-border shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-br from-brand-cyan/5 to-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <AnimatePresence mode="wait">
                {formState !== "sent" ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-6 relative z-10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormInput
                        label="Full Name"
                        name="name"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <FormInput
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <FormInput
                      label="Subject"
                      name="subject"
                      placeholder="How can we help?"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground ml-1">
                        Message
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-muted/50 border border-border focus:border-brand-cyan/50 focus:ring-4 focus:ring-brand-cyan/10 outline-none transition-all resize-none text-foreground"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formState === "sending"}
                      className="w-full py-5 rounded-xl bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm hover:bg-brand-cyan hover:shadow-[0_10px_40px_-10px_rgba(0,240,255,0.5)] transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                      {formState === "sending" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 flex flex-col items-center text-center space-y-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. We&apos;ll get back to you
                        shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => setFormState("idle")}
                      className="text-brand-cyan text-sm font-bold uppercase tracking-widest hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
              <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white text-[10px]">
                <img src="/logos/label3.ico" alt="Logo" />
              </div>
              Seratrix
            </div>
            <p>
              &copy; {new Date().getFullYear()} Seratrix Engineering. All rights
              reserved.
            </p>
          </div>

          <div className="flex gap-8">
            <FooterLink href="#" label="LinkedIn" />
            <FooterLink href="#" label="Twitter" />
            <FooterLink href="#" label="GitHub" />
            <FooterLink href="#" label="Legal" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactInfoItem({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-5 p-2 -ml-2 rounded-2xl hover:bg-white/5 transition-colors"
    >
      <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest mb-1">
          {title}
        </p>
        <div className="flex items-center gap-2">
          <p className="text-foreground font-medium group-hover:text-brand-cyan transition-colors">
            {value}
          </p>
          <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-cyan" />
        </div>
      </div>
    </a>
  );
}

function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground ml-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-5 py-4 rounded-xl bg-muted/50 border border-border focus:border-brand-cyan/50 focus:ring-4 focus:ring-brand-cyan/10 outline-none transition-all text-foreground"
      />
    </div>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="hover:text-brand-cyan transition-colors relative group"
    >
      {label}
      <span className="absolute bottom-0 left-0 w-full h-px bg-brand-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </a>
  );
}
