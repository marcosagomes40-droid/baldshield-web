import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');

    submissions.push({
      ...formData,
      timestamp: new Date().toISOString(),
    });

    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

    toast({
      title: 'Mensagem enviada',
      description: 'Obrigado pelo contato. Retornaremos em breve.',
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Nome */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-foreground font-medium">
          Nome
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Seu nome"
          className="bg-card border-border text-foreground"
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground font-medium">
          E-mail
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="seu@email.com"
          className="bg-card border-border text-foreground"
        />
      </div>

      {/* Assunto */}
      <div className="space-y-2">
        <Label htmlFor="subject" className="text-foreground font-medium">
          Assunto
        </Label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full bg-card border border-border text-foreground rounded-md px-3 py-2"
        >
          <option value="">Selecione um assunto</option>
          <option value="duvida">Dúvida</option>
          <option value="parceria">Parceria</option>
          <option value="lista">Lista de espera</option>
          <option value="imprensa">Imprensa</option>
        </select>
      </div>

      {/* Mensagem */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-foreground font-medium">
          Mensagem
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Escreva sua mensagem..."
          className="bg-card border-border text-foreground resize-none"
        />
      </div>

      {/* Botão */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold transition-all duration-200 active:scale-[0.98] disabled:opacity-50"
      >
        {isSubmitting ? (
          'Enviando...'
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Enviar mensagem
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
