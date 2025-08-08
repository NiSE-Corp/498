'use client';

import { useEffect, useState } from 'react';

const GETTERMS_IDS = {
  privacy: 'CTJZo',
  cookies: 'CTJZo',
  'acceptable-use': 'CTJZo',
  return: 'CTJZo',
  'app-privacy': 'CTJZo',
  'terms-of-service': 'CTJZo',
};

const GetTermsEmbed = ({ documentType = 'privacy', onLoadComplete }) => {
  const [loading, setLoading] = useState(true);
  const gettermsId = GETTERMS_IDS[documentType];

  useEffect(() => {
    if (!gettermsId) {
      console.error(`Invalid documentType: "${documentType}"`);
      return;
    }

    const containerId = `getterms-container-${documentType}`;
    const embedId = `getterms-embed-div-${documentType}`;
    const container = document.getElementById(containerId);

    if (container && !document.getElementById(embedId)) {
      const embedDiv = document.createElement('div');
      embedDiv.className = 'getterms-document-embed';
      embedDiv.dataset.getterms = gettermsId;
      embedDiv.dataset.gettermsDocument = documentType;
      embedDiv.dataset.gettermsLang = 'en-us';
      embedDiv.dataset.gettermsMode = 'direct';
      embedDiv.dataset.gettermsEnv = 'https://gettermscdn.com';
      embedDiv.id = embedId;
      container.appendChild(embedDiv);
    }

    if (!document.getElementById('getterms-embed-js')) {
      const script = document.createElement('script');
      script.id = 'getterms-embed-js';
      script.type = 'text/javascript';
      script.src = 'https://gettermscdn.com/dist/js/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }

    if (!document.getElementById('getterms-style-fix')) {
      const style = document.createElement('style');
      style.id = 'getterms-style-fix';
      style.innerHTML = `
        .getterms-document-embed p {
          margin-bottom: 1em;
        }
        .getterms-document-embed ul {
          list-style-type: disc;
          padding-left: 1.5em;
          margin-bottom: 1em;
        }
        .getterms-document-embed ol {
          list-style-type: decimal;
          padding-left: 1.5em;
          margin-bottom: 1em;
        }
        .getterms-document-embed li {
          margin-bottom: 0.5em;
        }
      `;
      document.head.appendChild(style);
    }

    const observer = new MutationObserver(() => {
      const embed = document.getElementById(embedId);
      if (embed && embed.children.length > 0) {
        setLoading(false);
        onLoadComplete?.();
        observer.disconnect();
      }
    });

    if (container) {
      observer.observe(container, { childList: true, subtree: true });
    }

    return () => observer.disconnect();
  }, [documentType, gettermsId, onLoadComplete]);

  const containerId = `getterms-container-${documentType}`;

  return (
    <>
      {loading && (
        <div className='text-center text-white py-10'>
          <div className='animate-spin h-8 w-8 mx-auto mb-2 border-4 border-blue-300 border-t-transparent rounded-full'></div>
          <p className='text-sm'>Loading {documentType} policy...</p>
        </div>
      )}
      <div id={containerId} className={`${loading ? 'hidden' : ''}`} />
    </>
  );
};

export default GetTermsEmbed;
