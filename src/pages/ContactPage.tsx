import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowUpRight, Mail, Phone, MapPin, Send, CheckCircle2, Loader2, X } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/alpha/SectionHeading";
import { Reveal } from "@/components/alpha/Reveal";
import { MagneticButton } from "@/components/alpha/MagneticButton";
import { cn } from "@/lib/utils";
import { submitContact, contactPayloadSchema, type ContactPayload } from "@/lib/contact";

const heroImage =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    lines: [
      "IT Park, Plot ITC 15, Sector 67",
      "Sahibzada Ajit Singh Nagar",
      "Punjab 160062",
    ],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["it.training@alphait.us"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["9056739082"],
  },
];

const areasOfInterest = [
  "Managed IT Services",
  "Cyber Security",
  "Cloud Services",
  "Digital Transformation",
  "IT Strategy and Planning",
  "IT Implementation and Integration",
  "Data Services",
  "Custom Product-Application Development",
  "Other Specialized Services",
  "Careers / Job Inquiry",
  "Partnership Opportunities",
  "General Inquiry",
];

const inquiryTypes = [
  { value: "general", label: "General Inquiry" },
  { value: "job-seeker", label: "Job Seeker" },
  { value: "callback", label: "Request Callback" },
  { value: "partnership", label: "Partnership Inquiry" },
  { value: "support", label: "Technical Support" },
];

export function ContactPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "general",
    areaOfInterest: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string>("");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors["name"] = "Name is required";
    if (!formData.email.trim()) newErrors["email"] = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors["email"] = "Invalid email format";
    if (!formData.phone.trim()) newErrors["phone"] = "Phone number is required";
    else if (!/^[\d\s+\-()]{10,}$/.test(formData.phone))
      newErrors["phone"] = "Valid phone number required";
    if (!formData.areaOfInterest) newErrors["areaOfInterest"] = "Please select an area of interest";
    if (!formData.message.trim()) newErrors["message"] = "Message is required";
    else if (formData.message.trim().length < 10)
      newErrors["message"] = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return; // prevent duplicate submissions
    if (!validateForm()) return;

    const payload: ContactPayload = {
      name: formData["name"],
      email: formData["email"],
      phone: formData["phone"],
      message: formData["message"],
      ...(formData["inquiryType"] ? { inquiryType: formData["inquiryType"] } : {}),
      ...(formData["areaOfInterest"] ? { areaOfInterest: formData["areaOfInterest"] } : {}),
    };

    const parsed = contactPayloadSchema.safeParse(payload);
    if (!parsed.success) {
      const newErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "");
        if (key && !newErrors[key]) newErrors[key] = issue.message;
      }
      setErrors(newErrors);
      return;
    }

    setStatus("submitting");
    try {
      const result = await submitContact(payload);
      if (result.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          inquiryType: "general",
          areaOfInterest: "",
          message: "",
        });
      } else {
        setStatus("error");
        setSubmitError(result.error);
      }
    } catch {
      setStatus("error");
      setSubmitError("Network error. Please check your connection and try again.");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <MainLayout>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section id="top" ref={heroRef} className="relative min-h-[60vh] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern office workspace"
            width={2400}
            height={1600}
            className="h-full w-full scale-110 object-cover opacity-45 saturate-150 contrast-105 animate-drift dark:opacity-55 dark:saturate-100 dark:contrast-100"
          />
          <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_10%,var(--navy-deep)_78%)]" />
          <div className="absolute inset-0 aurora opacity-80 mix-blend-multiply dark:opacity-70 dark:mix-blend-screen" />
        </motion.div>

        <motion.div
          style={{ opacity: fade }}
          className="relative z-10 mx-auto w-[min(1400px,92vw)] pt-28 pb-12 lg:pt-36"
        >
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Breadcrumb"
            className="flex items-center gap-3 text-sm text-muted-foreground"
          >
            <span className="eyebrow">Get in Touch</span>
            <span className="text-[var(--brand-cyan)]" aria-hidden>
              ↓
            </span>
            <span className="text-foreground">Contact</span>
          </motion.nav>

          <h1 className="display-hero mt-6 max-w-[20ch]">
            {["Contact", "Us"].map((line, i) => (
              <span key={`${line}-${i}`} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, delay: 0.28 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  {i === 1 ? <span className="text-gradient italic">{line}</span> : line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              Ready to start your next project? Have questions about our services? Our team is here
              to help. Reach out and we'll respond within 24 hours.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Contact Alpha Technologies ──────────────────────── */}
      <section id="contact-main" className="relative overflow-hidden py-20 lg:py-28">
        <div className="mx-auto w-[min(1400px,92vw)]">
          <Reveal>
            <SectionHeading
              index="01"
              eyebrow="Get in touch"
              title={
                <>
                  Contact <span className="text-gradient">Alpha Technologies</span>
                </>
              }
              lede="We'd love to hear from you. Whether you have a question about our services, need technical support, or want to explore partnership opportunities — our team is ready to assist."
              align="center"
            />
          </Reveal>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {/* ── Contact Information ─────────────────────────── */}
            <Reveal delay={0.1}>
              <div className="space-y-8">
                <div className="glass-panel rounded-[2rem] border border-border p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background/70 text-[var(--brand-cyan)]">
                      <MapPin className="h-6 w-6" />
                    </span>
                    <h3 className="text-2xl font-medium">Visit Us</h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="font-medium text-foreground">IT Park, Plot ITC 15, Sector 67</p>
                    <p>Sahibzada Ajit Singh Nagar</p>
                    <p>Punjab 160062</p>
                  </div>
                </div>

                <div className="glass-panel rounded-[2rem] border border-border p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background/70 text-[var(--brand-cyan)]">
                      <Mail className="h-6 w-6" />
                    </span>
                    <h3 className="text-2xl font-medium">Email Us</h3>
                  </div>
                  <div className="space-y-2">
                    <a
                      href="mailto:it.training@alphait.us"
                      className="text-muted-foreground hover:text-[var(--brand-cyan)] transition-colors flex items-center gap-2"
                    >
                      it.training@alphait.us
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="glass-panel rounded-[2rem] border border-border p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background/70 text-[var(--brand-cyan)]">
                      <Phone className="h-6 w-6" />
                    </span>
                    <h3 className="text-2xl font-medium">Call Us</h3>
                  </div>
                  <div className="space-y-2">
                    <a
                      href="tel:9056739082"
                      className="text-muted-foreground hover:text-[var(--brand-cyan)] transition-colors flex items-center gap-2"
                    >
                      9056739082
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* ── Contact Form ────────────────────────────────── */}
            <Reveal delay={0.15}>
              <div className="glass-panel rounded-[2rem] border border-border p-8 md:p-10">
                <div className="mb-8">
                  <h3 className="text-2xl font-medium mb-2">Send Us a Message</h3>
                  <p className="text-muted-foreground">
                    Fill out the form and we'll get back to you within 24 hours.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -20 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="text-center py-16"
                    >
                      <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-500 mx-auto mb-6">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-medium mb-3">Message Sent Successfully!</h3>
                      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                        Thank you for reaching out. Our team will get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="inline-flex items-center gap-2 text-[var(--brand-cyan)] font-medium hover:underline"
                      >
                        Send Another Message
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-6"
                    >
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className={cn(
                              "w-full px-4 py-3 rounded-xl border bg-background/70 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-300",
                              errors["name"] && "border-red-500 focus-visible:ring-red-500",
                            )}
                            aria-invalid={errors["name"] ? "true" : "false"}
                            aria-describedby={errors["name"] ? "name-error" : undefined}
                            disabled={status === "submitting"}
                          />
                          {errors["name"] && (
                            <p id="name-error" className="mt-1.5 text-sm text-red-500" role="alert">
                              {errors["name"]}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@company.com"
                            className={cn(
                              "w-full px-4 py-3 rounded-xl border bg-background/70 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-300",
                              errors["email"] && "border-red-500 focus-visible:ring-red-500",
                            )}
                            aria-invalid={errors["email"] ? "true" : "false"}
                            aria-describedby={errors["email"] ? "email-error" : undefined}
                            disabled={status === "submitting"}
                          />
                          {errors["email"] && (
                            <p
                              id="email-error"
                              className="mt-1.5 text-sm text-red-500"
                              role="alert"
                            >
                              {errors["email"]}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (555) 123-4567"
                            className={cn(
                              "w-full px-4 py-3 rounded-xl border bg-background/70 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-300",
                              errors["phone"] && "border-red-500 focus-visible:ring-red-500",
                            )}
                            aria-invalid={errors["phone"] ? "true" : "false"}
                            aria-describedby={errors["phone"] ? "phone-error" : undefined}
                            disabled={status === "submitting"}
                          />
                          {errors["phone"] && (
                            <p
                              id="phone-error"
                              className="mt-1.5 text-sm text-red-500"
                              role="alert"
                            >
                              {errors["phone"]}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="inquiryType"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Inquiry Type <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="inquiryType"
                            name="inquiryType"
                            value={formData.inquiryType}
                            onChange={handleInputChange}
                            className={cn(
                              "w-full px-4 py-3 rounded-xl border bg-background/70 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-300",
                              errors["inquiryType"] && "border-red-500 focus-visible:ring-red-500",
                            )}
                            disabled={status === "submitting"}
                          >
                            {inquiryTypes.map((type) => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="areaOfInterest"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Area of Interest <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="areaOfInterest"
                          name="areaOfInterest"
                          value={formData.areaOfInterest}
                          onChange={handleInputChange}
                          className={cn(
                            "w-full px-4 py-3 rounded-xl border bg-background/70 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-300",
                            errors["areaOfInterest"] && "border-red-500 focus-visible:ring-red-500",
                          )}
                          disabled={status === "submitting"}
                        >
                          <option value="">Select an area of interest</option>
                          {areasOfInterest.map((area) => (
                            <option key={area} value={area}>
                              {area}
                            </option>
                          ))}
                        </select>
                        {errors["areaOfInterest"] && (
                          <p className="mt-1.5 text-sm text-red-500" role="alert">
                            {errors["areaOfInterest"]}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          placeholder="Tell us about your project, inquiry, or how we can help..."
                          className={cn(
                            "w-full px-4 py-3 rounded-xl border bg-background/70 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-300 resize-none",
                            errors["message"] && "border-red-500 focus-visible:ring-red-500",
                          )}
                          aria-invalid={errors["message"] ? "true" : "false"}
                          aria-describedby={errors["message"] ? "message-error" : undefined}
                          disabled={status === "submitting"}
                        />
                        {errors["message"] && (
                          <p
                            id="message-error"
                            className="mt-1.5 text-sm text-red-500"
                            role="alert"
                          >
                              {errors["message"]}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center justify-end gap-4 pt-4">
                        <button
                          type="button"
                          onClick={() =>
                            setFormData({
                              name: "",
                              email: "",
                              phone: "",
                              inquiryType: "general",
                              areaOfInterest: "",
                              message: "",
                            })
                          }
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground hover:bg-secondary transition-colors disabled:opacity-50"
                          disabled={status === "submitting"}
                        >
                          Clear Form
                        </button>
                        <button
                          type="submit"
                          className={cn(
                            "inline-flex items-center gap-2 px-8 py-3 rounded-xl text-[var(--primary-foreground)] [background:var(--gradient-brand)] shadow-[var(--shadow-glow)] transition-all duration-300 hover:shadow-[var(--shadow-glow)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed",
                            status === "submitting" && "cursor-wait",
                          )}
                          disabled={status === "submitting"}
                        >
                          {status === "submitting" ? (
                            <>
                              <Loader2 className="h-5 w-5 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </>
                          )}
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400"
                    role="alert"
                  >
                    <p className="flex items-center gap-2">
                      <X className="h-4 w-4" />
                      {submitError || "Something went wrong. Please try again or email us directly at it.training@alphait.us"}
                    </p>
                  </motion.div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Get A Quote CTA ──────────────────────────────────── */}
      <section id="quote-cta" className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-border">
              <div className="absolute inset-0 aurora opacity-70" aria-hidden />
              <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_10%,var(--navy-deep)_78%)]" />
              <div className="relative px-8 py-16 text-center lg:px-20 lg:py-24">
                <p className="eyebrow">Ready to start</p>
                <h2 className="display-section mt-4">
                  Get A <span className="text-gradient">Quote</span>
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Tell us about your project requirements and we'll provide a customized proposal
                  with pricing and timeline.
                </p>
                <div className="mt-10 flex justify-center gap-4">
                  <MagneticButton href="#contact" className="px-10 py-4 text-base">
                    Request a Quote
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </MagneticButton>
                  <MagneticButton
                    href="/careers/explore-jobs"
                    variant="ghost"
                    className="px-10 py-4 text-base"
                  >
                    View Careers
                  </MagneticButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Map / Location Section ───────────────────────────── */}
      <section id="location" className="relative overflow-hidden py-20 lg:py-28">
        <div className="mx-auto w-[min(1400px,92vw)]">
          <Reveal>
            <SectionHeading
              index="02"
              eyebrow="Our location"
              title={
                <>
                  Find Us in <span className="text-gradient">Mohali</span>
                </>
              }
              lede="Our headquarters is located in the heart of Punjab's IT corridor, easily accessible from major cities and the Chandigarh International Airport."
              align="center"
            />
          </Reveal>

          <div className="mt-16">
            <Reveal delay={0.1}>
              <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.123456789!2d76.7!3d30.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb2c1234567%3A0x123456789abcdef!2sIT%20Park%2C%20Plot%20ITC%2015%2C%20Sector%2067%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20160062!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Alpha IT Managed Services Location - IT Park, Plot ITC 15, Sector 67, Sahibzada Ajit Singh Nagar"
                  aria-label="Map showing Alpha IT Managed Services location in Mohali, Punjab"
                ></iframe>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: MapPin,
                title: "Address",
                value: "IT Park, Plot ITC 15, Sector 67, Sahibzada Ajit Singh Nagar, Punjab 160062",
              },
              { icon: Mail, title: "Email", value: "it.training@alphait.us" },
              { icon: Phone, title: "Phone", value: "9056739082" },
            ].map((item, i) => (
              <Reveal key={item.title} delay={0.15 + i * 0.05}>
                <div className="glass-panel rounded-[1.5rem] border border-border p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] hover:border-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)]">
                  <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background/70 text-[var(--brand-cyan)] mx-auto mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-medium mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
