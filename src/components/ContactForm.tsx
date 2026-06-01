import React, { useRef, useState } from 'react';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setStatus('submitting');
    setErrorMessage('');
    const formData = new FormData(formRef.current);
    const dataObj = Object.fromEntries(formData.entries());
    const requestData = {
      ...dataObj,
      _subject: "New Contact Form Submission",
      _cc: "sumitibc333@gmail.com",
      _captcha: false,
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/anish248patel@gmail.com", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(requestData)
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data && data.success) {
        setStatus('success');
        formRef.current.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error("Submission Error:", data);
        if (data && data.message && typeof data.message === 'string') {
          setErrorMessage("Error: " + data.message);
        } else {
           setErrorMessage("Submission failed. Status: " + response.status + ".");
        }
        setStatus('error');
        setTimeout(() => setStatus('idle'), 8000);
      }
    } catch (error: any) {
      console.error("Fetch error:", error);
      setErrorMessage("Network error: " + error.message);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 8000);
    }
  };

  const handleReset = () => {
    formRef.current?.reset();
    setStatus('idle');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="glass p-8 md:p-12 rounded-xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Get in Touch <br className="hidden md:block" />
              <span className="italic accent-gold">With Our Experts</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-light">
              Register your interest for a private viewing or request a call back from our sales team.
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                className="peer w-full bg-white/5 border border-white/10 rounded-sm px-4 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                placeholder="Full Name"
              />
              <label htmlFor="name" className="absolute left-4 top-2 text-[10px] font-medium text-white/70 uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-gold pointer-events-none">
                Full Name
              </label>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
                  title="Please enter a valid email address (e.g. user@example.com)"
                  className="peer w-full bg-white/5 border border-white/10 rounded-sm px-4 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  placeholder="Email Address"
                />
                <label htmlFor="email" className="absolute left-4 top-2 text-[10px] font-medium text-white/70 uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-gold pointer-events-none">
                  Email Address
                </label>
              </div>
              
              <div className="relative">
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  title="Please enter exactly 10 digits"
                  className="peer w-full bg-white/5 border border-white/10 rounded-sm px-4 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  placeholder="Mobile Number"
                />
                <label htmlFor="mobile" className="absolute left-4 top-2 text-[10px] font-medium text-white/70 uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-gold pointer-events-none">
                  Mobile Number
                </label>
              </div>
            </div>

            <div className="relative">
              <textarea
                id="requirements"
                name="requirements"
                required
                maxLength={200}
                rows={3}
                className="peer w-full bg-white/5 border border-white/10 rounded-sm px-4 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                placeholder="Write your requirements here..."
              ></textarea>
              <label htmlFor="requirements" className="absolute left-4 top-2 text-[10px] font-medium text-white/70 uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-gold pointer-events-none">
                Requirements (Max 200 Chars)
              </label>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-6">
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm transition-colors text-white/60 hover:text-white border border-white/10 hover:border-white/30"
              >
                Reset
              </button>
              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className="w-full sm:w-auto bg-gold text-black px-10 py-4 rounded-sm font-bold uppercase tracking-wider text-sm transition-transform hover:scale-105 shadow-xl disabled:opacity-75 disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Submitting...' : status === 'success' ? 'Details Sent!' : status === 'error' ? 'Error. Try Again' : 'Submit Details'}
              </button>
            </div>
            {errorMessage && (
              <div className="text-red-400 text-sm mt-4 p-3 bg-red-950/50 rounded-sm border border-red-500/20 text-center">
                {errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
