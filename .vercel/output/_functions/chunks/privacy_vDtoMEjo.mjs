import { c as createComponent } from './astro-component_Dqhaqj9e.mjs';
import 'piccolore';
import { o as renderComponent, k as renderTemplate, m as maybeRenderHead } from './entrypoint_BS8E9aFq.mjs';
import { $ as $$Layout } from './Layout_BpBpADEo.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Privacy Policy", "description": "Kelly Green Holdings privacy policy." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-24 pb-20 bg-ash-50"> <div class="container max-w-3xl"> <h1 class="text-3xl md:text-4xl font-bold text-ash-900 mb-8">Privacy Policy</h1> <div class="prose prose-ash max-w-none text-ash-600 space-y-4"> <p><strong>Last updated:</strong> June 2026</p> <h2 class="text-xl font-bold text-ash-900 mt-8 mb-3">Information We Collect</h2> <p>Kelly Green Holdings collects minimal information. This site does not use cookies, trackers, or analytics. If you contact us via email, we will receive the information you provide in your message.</p> <h2 class="text-xl font-bold text-ash-900 mt-8 mb-3">How We Use Information</h2> <p>Any information you provide is used solely to respond to your inquiry. We do not sell, share, or otherwise distribute your personal information to third parties.</p> <h2 class="text-xl font-bold text-ash-900 mt-8 mb-3">Data Retention</h2> <p>We retain email correspondence as needed for business records. You may request deletion of your information at any time by contacting us.</p> <h2 class="text-xl font-bold text-ash-900 mt-8 mb-3">Third-Party Services</h2> <p>This website is hosted on Vercel. Vercel may collect standard server logs (IP address, browser type, page accessed) in accordance with their own privacy policy.</p> <h2 class="text-xl font-bold text-ash-900 mt-8 mb-3">Contact</h2> <p>For privacy-related inquiries: <a href="mailto:hello@kellygreenholdings.com" class="text-kelly-600 hover:text-kelly-700">hello@kellygreenholdings.com</a></p> </div> </div> </section> ` })}`;
}, "/home/starbloom/.openclaw/workspace/projects/kellygreenholdings.com/src/pages/privacy.astro", void 0);

const $$file = "/home/starbloom/.openclaw/workspace/projects/kellygreenholdings.com/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
