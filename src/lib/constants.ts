/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const CONTACT_INFO = {
  phone: "0690403387",
  phoneFormatted: "+27 69 040 3387",
  email: "JFlipsInc@gmail.com",
  location: "Krugersdorp, South Africa",
  address: "Krugersdorp, Gauteng, South Africa",
  instagram: "https://www.instagram.com/jflipscheer/",
  facebook: "https://www.facebook.com/profile.php?id=61591746614959",
};

export const WHATSAPP_MESSAGES = {
  general: "Hi, I saw your website. I have a couple of questions.",
  cheer: "Hi, I saw your website. I'm interested in joining the cheerleading team.",
  tumbling: "Hi, I saw your website. I'm interested in joining your tumbling classes.",
};

const COACH_WHATSAPP_NUMBER = "27690403387";

export const WHATSAPP_LINKS = {
  general: `https://wa.me/${COACH_WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGES.general)}`,
  cheer: `https://wa.me/${COACH_WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGES.cheer)}`,
  tumbling: `https://wa.me/${COACH_WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGES.tumbling)}`,
};

export const NAVIGATION_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "Schools", href: "#schools" },
  { label: "Merch", href: "#merch" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
