'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

const languages = {
  en: {
    // Navigation
    login: 'Sign In',
    signup: 'Get Started',
    features: 'Features',
    'how-it-works': 'How It Works',
    'about-us': 'About Us',
    testimonials: 'Testimonials',
    'contact-us': 'Contact Us',
    download: 'Download',

    // Hero Section
    'hero-title-1': 'Welcome to ',
    'hero-title-2': 'NexusPay',
    'hero-title-3': ', The Cashless App',
    'hero-description':
      'Experience seamless digital payments in Cameroon with our innovative fintech solution. Send money, make payments, and manage your finances - all in one app.',
    'get-started': 'Get Started',
    'explore-features': 'Explore Features',

    // Dashboard Demo
    'current-balance': 'Current Balance',
    debit: 'Debit',
    send: 'Send',
    receive: 'Receive',
    request: 'Request',
    'recent-transactions': 'Recent Transactions',
    rent: 'Rent',
    grocery: 'Grocery',
    'active-users': 'Active Users',
    transactions: 'Transactions Today',

    // Contact Section
    'contact-us-badge': 'Get In Touch',
    'contact-us-title': "We'd Love to Hear From You",
    'contact-us-description': 'Have questions about our services? Need technical support? Or want to explore partnership opportunities? Our dedicated team is here to assist you every step of the way.',
    'send-message': 'Send Message',
    'full-name': 'Full Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    'send-message-btn': 'Send Message',
    'contact-info': 'Contact Information',
    phone: 'Phone',
    'email-contact': 'Email',
    address: 'Address',
    'address-line1': '123 Business District',
    'address-line2': 'Douala, Cameroon',
    'business-hours': 'Business Hours',
    'monday-friday': 'Monday - Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
    closed: 'Closed',
    'support-note': '24/7 emergency support available for premium customers',
    'success-message': 'Message sent successfully! We\'ll get back to you soon.',

    // Download Section
    'download-badge': 'Get the App',
    'download-title': 'Take NexusPay With You Everywhere',
    'download-description': 'Access all your payment features on the go with our intuitive mobile app. Send money, pay bills, and manage your finances securely from anywhere, anytime.',
    'app-store': 'App Store',
    'google-play': 'Google Play',
    downloads: 'Downloads',
    rating: 'Rating',
    reviews: 'Reviews',
    'transactions-processed': 'Daily Transactions',
  },
  fr: {
    // Navigation
    login: 'Connexion',
    signup: 'Commencer',
    features: 'Fonctionnalités',
    'how-it-works': 'Comment Ça Marche',
    'about-us': 'À Propos',
    testimonials: 'Témoignages',
    'contact-us': 'Contact',
    download: 'Télécharger',

    // Hero Section
    'hero-title-1': 'Bienvenue sur ',
    'hero-title-2': 'NexusPay',
    'hero-title-3': ", L'Application Sans Espèces",
    'hero-description':
      'Découvrez les paiements numériques fluides au Cameroun avec notre solution fintech innovante. Envoyez de l\'argent, effectuez des paiements et gérez vos finances - tout dans une seule application.',
    'get-started': 'Commencer',
    'explore-features': 'Explorer les Fonctionnalités',

    // Dashboard Demo
    'current-balance': 'Solde Actuel',
    debit: 'Débit',
    send: 'Envoyer',
    receive: 'Recevoir',
    request: 'Demander',
    'recent-transactions': 'Transactions Récentes',
    rent: 'Loyer',
    grocery: 'Courses',
    'active-users': 'Utilisateurs Actifs',
    transactions: "Transactions Aujourd'hui",

    // Contact Section
    'contact-us-badge': 'Nous Contacter',
    'contact-us-title': 'Nous Aimerions Vous Entendre',
    'contact-us-description': 'Vous avez des questions sur nos services ? Besoin d\'un support technique ? Ou souhaitez explorer des opportunités de partenariat ? Notre équipe dédiée est là pour vous assister à chaque étape.',
    'send-message': 'Envoyer un Message',
    'full-name': 'Nom Complet',
    email: 'E-mail',
    subject: 'Sujet',
    message: 'Message',
    'send-message-btn': 'Envoyer le Message',
    'contact-info': 'Informations de Contact',
    phone: 'Téléphone',
    'email-contact': 'E-mail',
    address: 'Adresse',
    'address-line1': '123 Quartier des Affaires',
    'address-line2': 'Douala, Cameroun',
    'business-hours': 'Heures d\'Ouverture',
    'monday-friday': 'Lundi - Vendredi',
    saturday: 'Samedi',
    sunday: 'Dimanche',
    closed: 'Fermé',
    'support-note': 'Support d\'urgence 24h/7j disponible pour les clients premium',
    'success-message': 'Message envoyé avec succès ! Nous vous répondrons bientôt.',

    // Download Section
    'download-badge': 'Télécharger l\'App',
    'download-title': 'Emportez NexusPay Partout Avec Vous',
    'download-description': 'Accédez à toutes vos fonctionnalités de paiement en déplacement avec notre application mobile intuitive. Envoyez de l\'argent, payez des factures et gérez vos finances en toute sécurité, n\'importe où, n\'importe quand.',
    'app-store': 'App Store',
    'google-play': 'Google Play',
    downloads: 'Téléchargements',
    rating: 'Note',
    reviews: 'Avis',
    'transactions-processed': 'Transactions Quotidiennes',
  },
};

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setCurrentLanguage] = useState('en');

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    localStorage.setItem('nexuspay-language', lang);
  };

  const t = (key: string): string => {
    return (
      languages[language as keyof typeof languages]?.[
        key as keyof typeof languages.en
      ] ||
      languages.en[key as keyof typeof languages.en] ||
      key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};