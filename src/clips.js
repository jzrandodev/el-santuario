/* CLIPS — real footage, shown the licensed way: each platform's own embedded player.
 *
 * Nothing is downloaded or re-hosted. A clip lives on the platform it was posted to, credited to
 * whoever posted it, and the story card only frames it. Nothing loads from the platform until the
 * visitor taps "ver el video", so opening a card never sends anyone to TikTok, Instagram or YouTube
 * without asking.
 *
 * To add one: paste the post's public URL under the panel id, and the poster's handle as credit.
 *   '2022': { url:'https://www.tiktok.com/@someone/video/7170000000000000000', credit:'@someone' },
 * TikTok videos, Instagram posts and reels, and YouTube videos and shorts are understood. Any
 * other URL still shows as a plain link to the original. A post that is later deleted or made
 * private simply shows the platform's own "unavailable" frame.
 */

export const CLIPS = {
};

/* url → { platform, label, embed, tall } or null for a link-only clip */
export function embedOf(url){
  let u;
  try { u = new URL(url); } catch { return null; }
  const host = u.hostname.replace(/^www\.|^m\./, '');
  let m;
  if (host.endsWith('tiktok.com') && (m = u.pathname.match(/\/video\/(\d+)/)))
    return { platform:'tiktok', label:'TikTok', embed:`https://www.tiktok.com/player/v1/${m[1]}`, tall:true };
  if (host === 'instagram.com' && (m = u.pathname.match(/^\/(p|reels?|tv)\/([\w-]+)/)))
    return { platform:'instagram', label:'Instagram', tall:true,
      embed:`https://www.instagram.com/${m[1] === 'p' ? 'p' : 'reel'}/${m[2]}/embed/` };
  if (host === 'youtu.be' && (m = u.pathname.match(/^\/([\w-]{11})/)))
    return { platform:'youtube', label:'YouTube', embed:`https://www.youtube-nocookie.com/embed/${m[1]}`, tall:false };
  if (host.endsWith('youtube.com')) {
    const id = u.searchParams.get('v') || (u.pathname.match(/^\/(?:shorts|embed)\/([\w-]{11})/) || [])[1];
    if (id) return { platform:'youtube', label:'YouTube', embed:`https://www.youtube-nocookie.com/embed/${id}`,
      tall: u.pathname.startsWith('/shorts/') };
  }
  return null;
}

export function hostLabel(url){
  try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return ''; }
}
