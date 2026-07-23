// ============================================================
// EDIT THIS FILE to rebrand the site, edit events, and edit sponsors.
// Both index.html and event.html read from this one file, so every
// event automatically gets its own full detail page at:
//   event.html?slug=<slug>
//
// PAYMENT MODEL: Razorpay Payment Pages.
// All events currently share ONE Razorpay Payment Page link
// (https://pages.razorpay.com/pl_TB28gkZvmVtM7z/view) — every event's
// `razorpayLink` below points to it. If you later want separate pricing
// or tracking per event, create one Payment Page per event in the
// Razorpay dashboard and swap in each event's own link instead.
//
// NOTE: None of the 5 source event descriptions specified a
// registration fee, so `fee` / `feeAmount` below are placeholders
// ("TBA" / 0). Update these once you decide on pricing.
// ============================================================
const CONFIG = {
  eventName:        "SYNKRONIX '26",
  eventTagline:      "One day. In sync.",
  collegeName:       "Anna University Regional Campus Madurai ",
  deptName:          "Department of Computer Science & Engineering Presents",
  eventDateISO:      "2026-09-11T09:00:00",
  eventDateDisplay:  "11 September 2026",
  venue:             "Main Auditorium, Anna University Regional Campus Madurai",
  contactEmail:      "synkronix26@annauniv.edu",
  instagramUrl:      "#",
  linkedinUrl:       "#",

  // Optional: one Google Form if you'd rather also collect details
  // separately from Razorpay's own custom fields. Leave blank ("") to
  // hide the embedded form on event pages entirely.
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf3RR7chV8XsWDJ3wmDEpRfv0JD12mrAZdprkLvrM4cylFc-g/viewform?usp=sharing&ouid=113783326047631300675",

  events: [
    // ---- Technical events ----
    { slug:"code-auction", category:"Technical", title:"Code Auction",
      blurb:"Think Fast. Bid Smart. Code Better — bid Virtual Coins for coding problems, then solve what you win.",
      fullDescription:"Coding topics are auctioned one by one. Teams bid using their allotted Virtual Coins, and all successful bids are final — only the problems your team wins in the Auction Round can be attempted in the Coding Round. Solutions may be implemented in C, C++, Java, or Python. Teams can also purchase a Sealed Power Card containing a random advantage or challenge.",
      rules:[
        "Teams of 3 members.",
        "Coding topics are auctioned one by one; bid only with allotted Virtual Coins.",
        "All successful bids are final — only problems won in the auction can be attempted.",
        "Solutions may be implemented in C, C++, Java, or Python.",
        "Unsolved problems incur negative marking.",
        "Teams can purchase a Sealed Power Card for a random advantage or challenge.",
        "A Tie-Breaker Round determines the winner in case of a tie."
      ],
      fee:"TBA", feeAmount:0, image:"https://placehold.co/900x500/12151C/5B8DEF?text=Code+Auction",
      razorpayLink:"https://pages.razorpay.com/pl_TB28gkZvmVtM7z/view" },

    { slug:"paperexpo", category:"Technical", title:"PaperExpo – Paper Presentation",
      blurb:"Present original research or an applied project across AI/ML, cybersecurity, IoT, or cloud — 10 minutes per team.",
      fullDescription:"A professional technical paper presentation event where participants present original research, innovative solutions, or emerging technologies before a panel of experts, across four tracks: AI & ML / Data Science, Cybersecurity & Networks, Software Engineering & IoT, and Cloud Computing & Database Management. Each team gets a 10-minute slot (7-minute presentation + 3-minute Q&A). A full paper (max 10 pages, Times New Roman 12pt, two columns, A4) and a PPT in the prescribed template must be submitted in advance.",
      rules:[
        "Individual or team of up to 3 members.",
        "Full paper submission required (max 10 pages, prescribed format) plus PPT using the prescribed template.",
        "Papers must be original and free from plagiarism.",
        "Presentation: 7 minutes, followed by 3 minutes of Q&A.",
        "Judges' decision is final.",
        "Certificates awarded only to registered participants."
      ],
      fee:"TBA", feeAmount:0, image:"https://placehold.co/900x500/12151C/5B8DEF?text=PaperExpo",
      razorpayLink:"https://pages.razorpay.com/pl_TB28gkZvmVtM7z/view" },

    // ---- Non-technical events ----
    { slug:"escape-room", category:"Non-Technical", title:"Escape Room – The Last Evidence",
      blurb:"Step into a detective's shoes and crack a murder mystery before time runs out.",
      fullDescription:"Investigate a thrilling crime scene, analyze evidence, decode hidden clues, and identify the murderer, weapon, and motive within the time limit. Three teams play simultaneously, each working from a different set of clues that lead to the same final solution — teamwork, observation, and logical thinking are key.",
      rules:[
        "Teams of 3 members.",
        "Three teams play simultaneously, each with a different set of clues leading to the same solution.",
        "10-minute time limit per team.",
        "Teams must solve only their assigned clues — no communicating or sharing clues with other teams.",
        "Mobile phones, smartwatches, and other electronic devices are strictly prohibited.",
        "Props and clues must not be damaged, removed, or tampered with, and must stay inside the event area.",
        "Clue sharing or any unfair means results in immediate disqualification.",
        "Event coordinators' and judges' decision is final."
      ],
      fee:"TBA", feeAmount:0, image:"https://placehold.co/900x500/12151C/FFC857?text=Escape+Room",
      razorpayLink:"https://pages.razorpay.com/pl_TB28gkZvmVtM7z/view" },

    { slug:"mission-impossible", category:"Non-Technical", title:"Mission Impossible",
      blurb:"Five checkpoints — observation, logic, memory, and gesture-only communication — to unlock the Final Vault.",
      fullDescription:"A five-checkpoint non-technical event testing observation, logic, memory, communication, and teamwork. Teams collect clues at each round — Observation, Logic, Card Memory, and a gesture-only Communication round — then combine them to crack the Final Vault password. First to buzz gets the first attempt, with up to three alternate attempts.",
      rules:[
        "Teams of 2 members.",
        "Two teams compete simultaneously.",
        "No electronic gadgets allowed.",
        "No unfair means.",
        "Gestures only during the Communication round.",
        "Judges' decision is final."
      ],
      fee:"TBA", feeAmount:0, image:"https://placehold.co/900x500/12151C/FFC857?text=Mission+Impossible",
      razorpayLink:"https://pages.razorpay.com/pl_TB28gkZvmVtM7z/view" },

    { slug:"kadhaikkum-kalam", category:"Non-Technical", title:"Kadhaikkum Kalam",
      blurb:"\"Think. Speak. Convince. Win.\" — a debate with a role-reversal twist in the final. Organized by the CSE Department.",
      fullDescription:"A dynamic debate competition testing critical thinking, communication, and the ability to present convincing arguments. Held in two stages: an Elimination Round, and a Grand Finale with a role-reversal twist where teams must switch stance after the buzzer and continue debating from the opposite side without repeating earlier arguments. Organized by the Department of Computer Science and Engineering (CSE) at the Conference Hall.",
      rules:[
        "Teams of 3 members.",
        "Topics allotted by random draw; a toss decides for/against.",
        "Each participant gets 1 minute to present arguments.",
        "Top two teams from the elimination round advance to the Grand Finale.",
        "In the final, teams must switch stance after the buzzer and continue from the opposite perspective.",
        "Repeating previously presented arguments after the role reversal is not allowed.",
        "Participants must maintain respectful communication throughout.",
        "Judges' decision is final and binding."
      ],
      fee:"TBA", feeAmount:0, image:"https://placehold.co/900x500/12151C/FFC857?text=Kadhaikkum+Kalam",
      razorpayLink:"https://pages.razorpay.com/pl_TB28gkZvmVtM7z/view" },
  ],

  // 10 sponsor slots — replace name, logo, and url for each sponsor below.
  sponsors: [
    { name:"Sponsor 1",  logo:"https://placehold.co/240x120/EDEFF2/12151C?text=Sponsor+1",  url:"#" },
    { name:"Sponsor 2",  logo:"https://placehold.co/240x120/EDEFF2/12151C?text=Sponsor+2",  url:"#" },
    { name:"Sponsor 3",  logo:"https://placehold.co/240x120/EDEFF2/12151C?text=Sponsor+3",  url:"#" },
    { name:"Sponsor 4",  logo:"https://placehold.co/240x120/EDEFF2/12151C?text=Sponsor+4",  url:"#" },
    { name:"Sponsor 5",  logo:"https://placehold.co/240x120/EDEFF2/12151C?text=Sponsor+5",  url:"#" },
    { name:"Sponsor 6",  logo:"https://placehold.co/240x120/EDEFF2/12151C?text=Sponsor+6",  url:"#" },
    { name:"Sponsor 7",  logo:"https://placehold.co/240x120/EDEFF2/12151C?text=Sponsor+7",  url:"#" },
    { name:"Sponsor 8",  logo:"https://placehold.co/240x120/EDEFF2/12151C?text=Sponsor+8",  url:"#" },
    { name:"Sponsor 9",  logo:"https://placehold.co/240x120/EDEFF2/12151C?text=Sponsor+9",  url:"#" },
    { name:"Sponsor 10", logo:"https://placehold.co/240x120/EDEFF2/12151C?text=Sponsor+10", url:"#" },
  ],
};
