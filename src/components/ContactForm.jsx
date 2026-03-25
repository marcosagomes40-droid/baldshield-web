import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwrA99Uyr3o6lC-mbMTqL1jxZk0BEzNUKkqqyo1Muhx2Tn0UQHZT_jmkhPfBh4GADTPLw/exec';

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

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({
          nome: formData.name,
          email: formData.email,
          assunto: formData.subject,
          mensagem: formData.message,
          origem: 'contato-site',
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: 'Mensagem enviada',
          description: 'Recebemos seu contato com sucesso.',
        });

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error(result.error || 'Erro no envio');
      }
    } catch (error) {
      toast({
        title: 'Erro ao enviar',
        description: 'Não foi possível enviar sua mensagem. Tente novamente.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
          <option value="Dúvida">Dúvida</option>
          <option value="Parceria">Parceria</option>
          <option value="Lista de espera">Lista de espera</option>
          <option value="Imprensa">Imprensa</option>
        </select>
      </div>

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
