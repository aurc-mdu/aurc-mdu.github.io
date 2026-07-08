// ============================================================
// EDIT THIS FILE to rebrand the site, edit events, and edit sponsors.
// Both index.html and event.html read from this one file, so every
// event automatically gets its own full detail page at:
//   event.html?slug=<slug>
//
// PAYMENT MODEL: Razorpay Payment Pages.
// Each event has its own `razorpayLink` — create one Payment Page per
// event in the Razorpay dashboard (set the amount to that event's fee,
// and add Name/Email/Phone/College as custom fields so Razorpay collects
// registration details directly). Paste each page's link below.
// ============================================================
const CONFIG = {
  eventName:        "VERTEX '26",
  eventTagline:      "Where ideas connect.",
  collegeName:       "Department of Computer Science & Engineering",
  eventDateISO:      "2026-09-18T09:00:00",
  eventDateDisplay:  "18–19 September 2026",
  venue:             "Main Auditorium, Your College Name",
  contactEmail:      "cse.symposium@yourcollege.edu",
  instagramUrl:      "#",
  linkedinUrl:       "#",

  // Optional: one Google Form if you'd rather also collect details
  // separately from Razorpay's own custom fields. Leave blank ("") to
  // hide the embedded form on event pages entirely.
  googleFormUrl: "https://docs.google.com/forms/d/e/REPLACE_WITH_YOUR_FORM_ID/viewform?embedded=true",

  events: [
    // ---- Technical events ----
    { slug:"paper-presentation", category:"Technical", title:"Paper Presentation",
      blurb:"Present original research or review work in a 10-minute slot judged by faculty.",
      fullDescription:"Open to undergraduate and postgraduate students presenting original research, a literature review, or an applied case study relevant to computer science and engineering. Each team gets a 10-minute presentation slot followed by 5 minutes of questions from the judging panel. Submit an abstract (250–300 words) in advance for shortlisting.",
      rules:[
        "Teams of 1–2 members.",
        "Abstract submission required before the event; shortlisted entries present on the day.",
        "10-minute presentation + 5-minute Q&A per team.",
        "Plagiarism checks apply — cite all external sources.",
        "Judging on originality, clarity, and depth of analysis."
      ],
      fee:"₹150", feeAmount:150, image:"https://placehold.co/900x500/12151C/5B8DEF?text=Paper+Presentation",
      razorpayLink:"https://rzp.io/l/REPLACE_paper-presentation" },

    { slug:"hackathon", category:"Technical", title:"Hackathon",
      blurb:"24-hour build sprint, teams of up to 4, problem statements released on the day.",
      fullDescription:"A 24-hour on-campus build sprint. Problem statements across tracks (web, mobile, AI/ML, and open innovation) are released at kickoff — no pre-built projects allowed. Mentors circulate throughout the night, and final demos are judged live the next morning. Meals and a dedicated workspace are provided for registered teams.",
      rules:[
        "Teams of 2–4 members.",
        "All code must be written during the 24-hour window.",
        "Any tech stack allowed; open-source libraries permitted.",
        "Final demo: 5 minutes + 3-minute Q&A per team.",
        "Judged on innovation, technical execution, and completeness."
      ],
      fee:"₹400 / team", feeAmount:400, image:"https://placehold.co/900x500/12151C/5B8DEF?text=Hackathon",
      razorpayLink:"https://rzp.io/l/REPLACE_hackathon" },

    { slug:"coding-contest", category:"Technical", title:"Coding Contest",
      blurb:"Timed competitive programming round, individual entries, standard judge platform.",
      fullDescription:"A timed individual competitive-programming round hosted on a standard online judge. Problems range from easy to hard across arrays, graphs, dynamic programming, and greedy algorithms. Partial scoring applies, so attempt every problem you can rather than only the ones you're sure of.",
      rules:[
        "Individual participation only.",
        "Duration: 2 hours, fixed problem set.",
        "Partial scoring for partially correct solutions.",
        "Any language supported by the judge platform is allowed.",
        "Plagiarism detection is run on all submissions."
      ],
      fee:"₹100", feeAmount:100, image:"https://placehold.co/900x500/12151C/5B8DEF?text=Coding+Contest",
      razorpayLink:"https://rzp.io/l/REPLACE_coding-contest" },

    { slug:"technical-quiz", category:"Technical", title:"Technical Quiz",
      blurb:"Rapid-fire and buzzer rounds covering CS fundamentals, teams of 2.",
      fullDescription:"A prelims-and-finals format quiz covering CS fundamentals — algorithms, operating systems, networks, databases, and current tech trends. Top teams from a short written prelim advance to a live buzzer-round final in front of the audience.",
      rules:[
        "Teams of 2 members.",
        "Written prelim round shortlists teams for the final.",
        "Final round uses a live buzzer system.",
        "No electronic devices permitted during either round.",
        "Quizmaster's decision is final on all disputes."
      ],
      fee:"₹100 / team", feeAmount:100, image:"https://placehold.co/900x500/12151C/5B8DEF?text=Technical+Quiz",
      razorpayLink:"https://rzp.io/l/REPLACE_technical-quiz" },

    { slug:"project-expo", category:"Technical", title:"Project Expo",
      blurb:"Showcase a working prototype or research project to judges and visitors.",
      fullDescription:"An exhibition-style showcase for working prototypes, research projects, or applied engineering builds. Teams get a table and power outlet to display their project through the day, with judges visiting each stall for a walkthrough and Q&A.",
      rules:[
        "Teams of up to 3 members.",
        "Project must be a working prototype, not slides-only.",
        "Bring your own peripherals; power outlets provided.",
        "Judges visit stalls between 11 AM–2 PM.",
        "Judged on functionality, originality, and real-world relevance."
      ],
      fee:"₹200 / team", feeAmount:200, image:"https://placehold.co/900x500/12151C/5B8DEF?text=Project+Expo",
      razorpayLink:"https://rzp.io/l/REPLACE_project-expo" },

    // ---- Non-technical events ----
    { slug:"treasure-hunt", category:"Non-Technical", title:"Treasure Hunt",
      blurb:"Campus-wide clue trail, teams of 3–4, roughly 90 minutes.",
      fullDescription:"A campus-wide clue trail blending riddles, light physical tasks, and a few tech-flavoured puzzles. Teams start at staggered intervals and race to the final checkpoint — the fastest correct finish wins.",
      rules:[
        "Teams of 3–4 members.",
        "Staggered start times will be assigned on the day.",
        "Trail stays within designated campus zones.",
        "No outside help or phone use during the hunt.",
        "Fastest correct completion wins; time is the primary tiebreaker."
      ],
      fee:"₹150 / team", feeAmount:150, image:"https://placehold.co/900x500/12151C/FFC857?text=Treasure+Hunt",
      razorpayLink:"https://rzp.io/l/REPLACE_treasure-hunt" },

    { slug:"gaming-arena", category:"Non-Technical", title:"Gaming Arena",
      blurb:"Esports bracket — check the schedule for which title is featured this year.",
      fullDescription:"A single-elimination esports bracket. The featured title and format (solo or squad) will be posted closer to the event on the announcements page — registration secures your slot in the bracket draw.",
      rules:[
        "Format depends on the featured title (see announcements).",
        "Single-elimination bracket; late arrivals forfeit their slot.",
        "Own controller/peripherals allowed if compatible.",
        "Unsporting conduct results in disqualification.",
        "Organizers' ruling is final on all in-match disputes."
      ],
      fee:"₹100", feeAmount:100, image:"https://placehold.co/900x500/12151C/FFC857?text=Gaming+Arena",
      razorpayLink:"https://rzp.io/l/REPLACE_gaming-arena" },

    { slug:"photography", category:"Non-Technical", title:"Photography Contest",
      blurb:"Submit up to 3 entries on the day's theme, judged by an external panel.",
      fullDescription:"A themed photography contest — the theme is announced at the start of the event, and entries are shot and submitted within the event window. An external judging panel scores on composition, relevance to the theme, and technical quality.",
      rules:[
        "Individual entries only, up to 3 photos per participant.",
        "Photos must be taken within the event window.",
        "Basic color correction allowed; heavy compositing is not.",
        "Submit via the link shared at the venue.",
        "Judged on composition, theme relevance, and technical quality."
      ],
      fee:"₹80", feeAmount:80, image:"https://placehold.co/900x500/12151C/FFC857?text=Photography",
      razorpayLink:"https://rzp.io/l/REPLACE_photography" },

    { slug:"meme-contest", category:"Non-Technical", title:"Meme Making Contest",
      blurb:"Live prompt, 30 minutes, original artwork only — judged on relevance and craft.",
      fullDescription:"A live-prompt meme-making contest. The theme is revealed on the spot and participants have 30 minutes to create and submit an original meme — templates are fine, but the joke and any custom artwork must be your own.",
      rules:[
        "Individual participation only.",
        "Prompt is revealed at the start; 30-minute time limit.",
        "Original captions/artwork only — no reposting existing memes.",
        "One submission per participant.",
        "Judged on relevance to the prompt, originality, and humor."
      ],
      fee:"₹50", feeAmount:50, image:"https://placehold.co/900x500/12151C/FFC857?text=Meme+Contest",
      razorpayLink:"https://rzp.io/l/REPLACE_meme-contest" },

    { slug:"talent-show", category:"Non-Technical", title:"Talent Show",
      blurb:"Open-genre stage slot, up to 5 minutes, solo or group.",
      fullDescription:"An open-genre stage slot for music, dance, comedy, spoken word, or any other performing act. Solo and group entries are both welcome — bring your own backing track if needed, basic stage sound and lighting are provided.",
      rules:[
        "Solo or group (up to 6 performers).",
        "Maximum 5 minutes on stage per act.",
        "Backing tracks must be shared in advance in a standard audio format.",
        "Content must be appropriate for a general campus audience.",
        "Judged on performance quality, creativity, and stage presence."
      ],
      fee:"₹100", feeAmount:100, image:"https://placehold.co/900x500/12151C/FFC857?text=Talent+Show",
      razorpayLink:"https://rzp.io/l/REPLACE_talent-show" },
  ],

  // 10 sponsor slots — replace image + url per sponsor.
  sponsors: Array.from({length:10}, (_,i) => ({
    name: "Sponsor " + (i+1),
    logo: "https://placehold.co/240x120/EDEFF2/12151C?text=Sponsor+" + (i+1),
    url: "#"
  })),
};

