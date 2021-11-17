import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: "I think it's fantastic, #blessed. Every day is magical!!!!",
  },
  {
    id: 2,
    rating: 2,
    text: "My favourite band just cancelled their show in my city so that's pretty shitty",
  },
  {
    id: 3,
    rating: 6,
    text: "Well the world is looking a bit rough at the moment, but I got my dog Skipper so I think it's gonna be alright",
  },
]);
