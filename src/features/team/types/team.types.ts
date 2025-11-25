export interface Team {
  idTeam: string;
  idESPN?: string | null;
  idAPIfootball?: string | null;
  intLoved?: string | null;

  strTeam: string;
  strTeamAlternate?: string | null;
  strTeamShort?: string | null;
  intFormedYear?: string | null;

  strSport?: string | null;

  strLeague?: string | null;
  idLeague?: string | null;

  strLeague2?: string | null;
  idLeague2?: string | null;
  strLeague3?: string | null;
  idLeague3?: string | null;
  strLeague4?: string | null;
  idLeague4?: string | null;
  strLeague5?: string | null;
  idLeague5?: string | null;
  strLeague6?: string | null;
  idLeague6?: string | null;
  strLeague7?: string | null;
  idLeague7?: string | null;

  strDivision?: string | null;

  idVenue?: string | null;
  strStadium?: string | null;
  strLocation?: string | null;
  intStadiumCapacity?: string | null;

  strRSS?: string | null;
  strKeywords?: string | null;

  strWebsite?: string | null;
  strFacebook?: string | null;
  strTwitter?: string | null;
  strInstagram?: string | null;
  strYoutube?: string | null;

  strDescriptionEN?: string | null;
  strDescriptionDE?: string | null;
  strDescriptionFR?: string | null;
  strDescriptionCN?: string | null;
  strDescriptionIT?: string | null;
  strDescriptionJP?: string | null;
  strDescriptionRU?: string | null;
  strDescriptionES?: string | null;
  strDescriptionPT?: string | null;
  strDescriptionSE?: string | null;
  strDescriptionNL?: string | null;
  strDescriptionHU?: string | null;
  strDescriptionNO?: string | null;
  strDescriptionIL?: string | null;
  strDescriptionPL?: string | null;

  strColour1?: string | null;
  strColour2?: string | null;
  strColour3?: string | null;

  strGender?: string | null;
  strCountry?: string | null;

  // Images
  strBadge?: string | null;
  strLogo?: string | null;
  strFanart1?: string | null;
  strFanart2?: string | null;
  strFanart3?: string | null;
  strFanart4?: string | null;
  strBanner?: string | null;
  strEquipment?: string | null;

  strLocked?: string | null;
}

export interface SearchTeamsResponse {
  teams: Team[] | null;
}

export interface LookupTeamResponse {
  teams: Team[] | null;
}
