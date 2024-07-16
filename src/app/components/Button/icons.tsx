import React from "react";

export const AerolabIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24">
    <use href="../../public/icons/aerolab-logo.svg#icon" />
  </svg>
);

export const AerolabIconMobile = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24">
    <use href="../../public/icons/aerolab-logo-mobile.svg#icon" />
  </svg>
);

export const AerolabIconButton = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24">
    <use href="../../public/icons/aerolab-icon-button-cta.svg" />
  </svg>
);
