/**
 * Public creator data for /creator-partners/.
 *
 * Only publish fields the creator has agreed to show: name, links and
 * follower counts. Internal fields from the creator data sheet (rates, past
 * deals, GST, notes, brand-safety checks) must never be added here.
 *
 * To add a creator: append an entry. Leave a field out if it is unknown —
 * the page hides anything that is missing.
 */

export type Platform = "instagram" | "facebook" | "youtube";

export type CreatorChannel = {
  platform: Platform;
  /** Public handle, shown on the card (e.g. "@insta_jdgaming"). */
  handle?: string;
  /** Profile URL. When absent the audience figure is shown without a link. */
  url?: string;
  /** Followers / subscribers. */
  audience?: number;
};

export type Creator = {
  name: string;
  /** Person behind the channel, when the channel name differs. */
  realName?: string;
  niche: string;
  /** Website Rock One built for the creator. */
  website?: { label: string; url: string };
  /** Square avatar in /public (e.g. "/creators/name.webp"). Initials are shown when absent. */
  photo?: string;
  channels: CreatorChannel[];
};

/** Month the follower counts below were recorded. Update with the numbers. */
export const AUDIENCE_AS_OF = "November 2026";

export const creators: Creator[] = [
  {
    name: "Mr JD Gaming",
    niche: "Gaming",
    website: { label: "mrjdgaming.com", url: "https://mrjdgaming.com/" },
    photo: "/creators/mr-jd-gaming.webp",
    channels: [
      {
        platform: "instagram",
        handle: "@insta_jdgaming",
        url: "https://www.instagram.com/insta_jdgaming/",
        audience: 353_000,
      },
      { platform: "facebook", audience: 1_400_000 },
      {
        platform: "youtube",
        handle: "@imMrJD",
        url: "https://www.youtube.com/@imMrJD",
        audience: 215_000,
      },
    ],
  },
  {
    name: "Mr Bhahuk",
    niche: "Gaming",
    website: { label: "bhahukgaming.com", url: "https://bhahukgaming.com/" },
    photo: "/creators/mr-bhahuk.webp",
    channels: [
      {
        platform: "instagram",
        handle: "@mrbhahuk71",
        url: "https://www.instagram.com/mrbhahuk71/",
        audience: 518_000,
      },
      { platform: "facebook", audience: 2_700_000 },
      { platform: "youtube", audience: 301_000 },
    ],
  },
  {
    name: "HelloSPlays",
    realName: "Shubham",
    niche: "Gaming",
    website: { label: "hellosplays.com", url: "https://hellosplays.com/" },
    photo: "/creators/hellosplays.webp",
    channels: [
      {
        platform: "instagram",
        handle: "@hellosplays",
        url: "https://www.instagram.com/hellosplays/",
        audience: 176_000,
      },
      { platform: "youtube", audience: 113_000 },
    ],
  },
  {
    name: "Game Review",
    realName: "Nitin",
    niche: "Gaming",
    website: { label: "nitingames.tech", url: "https://nitingames.tech/" },
    photo: "/creators/game-review.webp",
    channels: [
      {
        platform: "instagram",
        handle: "@gamereview_0",
        url: "https://www.instagram.com/gamereview_0/",
        audience: 40_100,
      },
    ],
  },
];

export const platformLabels: Record<Platform, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  youtube: "YouTube",
};

export function creatorAudience(creator: Creator): number {
  return creator.channels.reduce((sum, channel) => sum + (channel.audience ?? 0), 0);
}

export function networkAudience(list: Creator[] = creators): number {
  return list.reduce((sum, creator) => sum + creatorAudience(creator), 0);
}

const compact = new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 });

/** 518000 → "518K", 2700000 → "2.7M". */
export function formatAudience(value: number): string {
  return compact.format(value);
}

/** Rounds down for headline totals so the figure is never overstated: 7,060,100 → "7M+". */
export function formatAudienceFloor(value: number): string {
  if (value >= 1_000_000) {
    const millions = Math.floor(value / 100_000) / 10;
    return `${Number.isInteger(millions) ? millions.toFixed(0) : millions}M+`;
  }
  if (value >= 1_000) return `${Math.floor(value / 1_000)}K+`;
  return String(value);
}
