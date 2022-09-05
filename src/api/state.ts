import { atom, selector } from "recoil";
// import { getCookie } from "../acmApi/cookieManager";
import verify from "./actions/initialize";
import verify_gsuite from "./actions/initialize_gsuite";
import get_profile from "./actions/profile";
import get_applications from "./actions/application";
import axios from "axios";
import ical from "ical";
import { calendarEvent } from "../views/Calendar/Calendar";

export const jwt = atom({
  key: "jwt",
  default: {
    token: "",
    isSet: false,
  },
});

// will automatically re-evaluate if the jwt changes
export const auth = selector({
  key: "auth",
  get: async ({ get }) => {
    return await verify(get(jwt).token);
  },
});

export const profile = selector({
  key: "profile",
  get: async ({ get }) => {
    return await get_profile(get(jwt).token);
  },
});

export const application = selector({
  key: "application",
  get: async ({ get }) => {
    return await get_applications(get(jwt).token);
  },
});

export const jwt_gsuite = atom({
  key: "jwt_gsuite",
  default: {
    token: "",
    isSet: false,
  },
});

// will automatically re-evaluate if the jwt_gsuite changes
export const auth_gsuite = selector({
  key: "auth_gsuite",
  get: async ({ get }) => {
    return await verify_gsuite(get(jwt_gsuite).token);
  },
});

export const ics = atom({
  key: "ics",
  default: "",
  effects: [
    ({ setSelf }) => {
      setSelf(
        axios
          .get(
            "https://raw.githubusercontent.com/acmutd/calendar-converter/ics/calendar.ics"
          )
          .then((response) => {
            return response.data;
          })
      );
    },
  ],
});

export const eventMap = selector({
  key: "eventMap",
  get: async ({ get }) => {
    const rawIcs = get(ics);
    const parsedIcs = ical.parseICS(rawIcs);
    const eventMap = new Map<string, calendarEvent[]>();

    for (let k in parsedIcs) {
      if (parsedIcs.hasOwnProperty(k)) {
        var ev = parsedIcs[k];
        if (parsedIcs[k].type === "VEVENT") {
          const dateKey = `${ev.start.getDate()}${ev.start.getMonth()}${ev.start.getFullYear()}`;
          if (eventMap.has(dateKey)) {
            eventMap
              .get(dateKey)
              .push({ color: "orange", content: ev.summary });
          } else {
            eventMap.set(
              `${ev.start.getDate()}${ev.start.getMonth()}${ev.start.getFullYear()}`,
              [{ color: "orange", content: ev.summary }]
            );
          }
        }
      }
    }
    return eventMap;
  },
});
