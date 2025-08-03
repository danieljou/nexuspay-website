'use client';

import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function FeaturesModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('click', handleOutsideClick);
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
      <div
        ref={modalRef}
        className="relative w-[90%] max-w-[900px] max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-xl animate-slideIn"
      >
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-t-2xl relative">
          <h2 className="text-2xl font-semibold">Toutes nos Fonctionnalités</h2>
          <button onClick={onClose} className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 rounded-full p-2">
            <X className="text-white w-6 h-6" />
          </button>
        </div>
        <div className="p-6 text-gray-600">
          <p className="text-lg mb-6">
            Découvrez l&apos;ensemble des fonctionnalités avancées qui font de notre plateforme un outil incontournable pour votre réussite.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-100 border-l-4 border-indigo-500 p-5 rounded-xl relative hover:shadow-lg transition duration-300 group"
              >
                <div className="w-12 h-12 text-white text-xl bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-3">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
                <ul className="list-none space-y-1">
                  {feature.benefits.map((b, i) => (
                    <li key={i} className="relative pl-5 text-gray-700">
                      <span className="absolute left-0 text-green-600 font-bold">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: '🚀',
    title: 'Performance Optimisée',
    description: 'Notre système utilise les dernières technologies pour garantir des performances exceptionnelles.',
    benefits: ['Temps de chargement ultra-rapides', 'Architecture cloud scalable', 'Optimisation automatique des ressources'],
  },
  {
    icon: '🔒',
    title: 'Sécurité Avancée',
    description: 'Protection maximale de vos données avec un chiffrement de niveau bancaire.',
    benefits: ['Chiffrement AES 256-bit', 'Authentification à deux facteurs', 'Sauvegardes automatiques sécurisées'],
  },
  {
    icon: '📊',
    title: 'Analytics Complets',
    description: 'Tableau de bord avancé avec des métriques détaillées pour suivre vos performances.',
    benefits: ['Rapports personnalisables', 'Métriques en temps réel', 'Exportation des données'],
  },
  {
    icon: '🤖',
    title: 'Intelligence Artificielle',
    description: 'IA intégrée pour automatiser les tâches répétitives et fournir des recommandations.',
    benefits: ['Automatisation intelligente', 'Recommandations personnalisées', 'Apprentissage adaptatif'],
  },
  {
    icon: '🌐',
    title: 'Intégrations Multiples',
    description: 'Connectez vos outils favoris grâce à une large gamme d’intégrations et API.',
    benefits: ['API REST complète', 'Webhooks en temps réel', 'Intégrations tierces populaires'],
  },
  {
    icon: '📱',
    title: 'Multi-Plateforme',
    description: 'Accédez à vos données depuis n’importe quel appareil avec notre interface responsive.',
    benefits: ['Interface web responsive', 'Applications iOS et Android', 'Synchronisation cross-device'],
  },
  {
    icon: '👥',
    title: 'Collaboration d’Équipe',
    description: 'Outils pour le travail collaboratif avec gestion des rôles et permissions.',
    benefits: ['Espaces de travail collaboratifs', 'Gestion des rôles et permissions', 'Commentaires et notifications'],
  },
  {
    icon: '🎨',
    title: 'Personnalisation Avancée',
    description: 'Adaptez l’interface à vos besoins avec des thèmes personnalisables.',
    benefits: ['Thèmes et couleurs personnalisables', 'Layouts configurables', 'Workflows sur mesure'],
  },
];
