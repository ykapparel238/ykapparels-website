/*
  Typed image registry. Content files reference images by key so copy edits
  never touch imports, and a typo is a compile error instead of a broken image.
*/
import type { ImageMetadata } from 'astro';

import embroidery from '../assets/images/embroidery.jpg';
import eventKnits from '../assets/images/event-knits.jpg';
import factoryMachines from '../assets/images/factory-machines.jpg';
import floralTextile from '../assets/images/floral-textile.jpg';
import kidsClothes from '../assets/images/kids-clothes.jpg';
import knitGrey from '../assets/images/knit-grey.jpg';
import knitTexture from '../assets/images/knit-texture.jpg';
import sewingHands from '../assets/images/sewing-hands.jpg';
import sewingMachine from '../assets/images/sewing-machine.jpg';
import sweatersPile from '../assets/images/sweaters-pile.jpg';
import sweatersStack from '../assets/images/sweaters-stack.jpg';
import teesHanging from '../assets/images/tees-hanging.jpg';
import threadsBox from '../assets/images/threads-box.jpg';
import workshop from '../assets/images/workshop.jpg';
import yarnSpools from '../assets/images/yarn-spools.jpg';

export const images = {
  'embroidery': embroidery,
  'event-knits': eventKnits,
  'factory-machines': factoryMachines,
  'floral-textile': floralTextile,
  'kids-clothes': kidsClothes,
  'knit-grey': knitGrey,
  'knit-texture': knitTexture,
  'sewing-hands': sewingHands,
  'sewing-machine': sewingMachine,
  'sweaters-pile': sweatersPile,
  'sweaters-stack': sweatersStack,
  'tees-hanging': teesHanging,
  'threads-box': threadsBox,
  'workshop': workshop,
  'yarn-spools': yarnSpools,
} satisfies Record<string, ImageMetadata>;

export type ImageKey = keyof typeof images;
