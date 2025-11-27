export const API = {
  TEAMS: {
    SEARCH: "searchteams.php1",
    DETAILS: (id: string) => `lookupteam.php?id=${id}`,
  },
  MATCHES: {
    LIVE: "eventsnext.php?id=133602",
    DETAILS: (id: string) => `lookupevent.php?id=${id}`,
  },
} as const;
