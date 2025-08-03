import React, { useState, useEffect } from 'react';
import { 
  CreditCard, 
  Send, 
  CheckCircle, 
  ArrowRight,
  Download,
  Wallet,
  Shield,
  Zap,
  Globe,
  Play,
  ChevronRight
} from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      icon: <Download className="w-8 h-8" />,
      title: "Téléchargez l'App",
      description: "Téléchargez NexusPAY depuis l'App Store ou Google Play et créez votre compte en quelques minutes",
      details: "Interface intuitive, inscription sécurisée avec vérification par SMS",
      color: "from-primary to-primary-light",
      bgColor: "bg-bg-secondary",
      borderColor: "border-border-color",
      textColor: "text-primary"
    },
    {
      id: 2,
      icon: <CreditCard className="w-8 h-8" />,
      title: "Obtenez Votre Carte",
      description: "Recevez votre carte de débit commerciale VISA avec technologie RFID et NFC intégrée",
      details: "Carte physique et virtuelle, compatible avec tous les terminaux POS",
      color: "from-primary to-primary-light",
      bgColor: "bg-bg-secondary",
      borderColor: "border-border-color",
      textColor: "text-primary"
    },
    {
      id: 3,
      icon: <Wallet className="w-8 h-8" />,
      title: "Rechargez Facilement",
      description: "Alimentez votre compte via Orange Money, MTN Mobile Money ou virement bancaire",
      details: "Recharge instantanée, multiple options de paiement disponibles",
      color: "from-primary to-primary-light",
      bgColor: "bg-bg-secondary",
      borderColor: "border-border-color",
      textColor: "text-primary"
    },
    {
      id: 4,
      icon: <Send className="w-8 h-8" />,
      title: "Payez Partout",
      description: "Utilisez votre carte ou l'app pour payer en magasin, en ligne ou transférer de l'argent",
      details: "Paiements sans contact, transferts même sans internet, sécurité maximale",
      color: "from-primary to-primary-light",
      bgColor: "bg-bg-secondary",
      borderColor: "border-border-color",
      textColor: "text-primary"
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instantané",
      description: "Transactions en temps réel"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sécurisé",
      description: "Chiffrement bancaire"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Sans Internet",
      description: "Fonctionne même offline"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-bg-secondary to-bg-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-primary-light/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 border border-border-color shadow-sm">
            <Play className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm text-text-secondary font-medium">Comment ça marche</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary leading-tight">
            Commencez avec NexusPAY en
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent block">
              4 étapes simples
            </span>
          </h2>

          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Découvrez la simplicité des paiements digitaux au Cameroun avec notre plateforme innovante
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative mb-20">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-border-color rounded-full transform -translate-y-1/2 hidden lg:block">
            <div 
              className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  activeStep === index ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className={`p-8 rounded-2xl border-2 transition-all duration-300 shadow-lg hover:shadow-xl ${
                  activeStep === index
                    ? `${step.bgColor} ${step.borderColor} shadow-2xl`
                    : 'bg-bg-primary border-border-color hover:border-muted'
                }`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${
                    activeStep === index
                      ? `bg-gradient-to-r ${step.color} text-white shadow-lg`
                      : 'bg-muted text-text-secondary'
                  }`}>
                    {activeStep === index ? step.icon : <span className="font-bold">{step.id}</span>}
                  </div>

                  <h3 className={`text-xl font-bold mb-3 transition-colors ${
                    activeStep === index ? step.textColor : 'text-text-primary'
                  }`}>
                    {step.title}
                  </h3>

                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  <div className={`text-sm transition-all duration-300 ${
                    activeStep === index ? `${step.textColor} opacity-100` : 'text-muted opacity-70'
                  }`}>
                    {step.details}
                  </div>

                  {activeStep === index && (
                    <div className="mt-4 flex items-center text-sm font-medium text-primary">
                      <span className="mr-2">En cours</span>
                      <ChevronRight className="w-4 h-4 animate-pulse" />
                    </div>
                  )}
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border-color transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-bg-primary rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="p-2 bg-gradient-to-r from-primary to-primary-light rounded-full text-white">
                  {feature.icon}
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-text-primary">{feature.title}</h4>
              <p className="text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-bg-primary rounded-2xl p-8 shadow-xl border border-border-color">
          <h3 className="text-2xl font-bold mb-4 text-text-primary">
            Prêt à révolutionner vos paiements ?
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Rejoignez des milliers d&apos;utilisateurs qui font confiance à NexusPAY pour leurs transactions quotidiennes
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center">
              Télécharger maintenant
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full border-2 border-border-color text-text-primary hover:border-primary transition-colors font-semibold">
              Voir la démo
            </button>
          </div>

          <div className="flex justify-center items-center mt-6 space-x-6 text-sm text-text-secondary">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
              Gratuit à télécharger
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
              Sécurisé & certifié
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
              Support 24/7
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
