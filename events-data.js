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
//
// NOTE: Each event now carries every detail from its source doc, not
// just the fields the original template used. Beyond slug/category/
// title/blurb/fullDescription/rules/fee/image/razorpayLink, some
// events also include: teamSize, venue, tracks, presentationFormat,
// prerequisites, importantDates, eligibility, prizes, rounds, judging,
// organizedBy, tagline. If event.html only renders the original
// fields, you'll want to add markup there to surface these too.
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
      fullDescription:"Coding topics are auctioned one by one. Teams bid using their allotted Virtual Coins, and all successful bids are final — only the problems your team wins in the Auction Round can be attempted in the Coding Round. Solutions may be implemented in C, C++, Java, or Python. Teams can also purchase a Sealed Power Card, which contains a random advantage or challenge.",
      teamSize:"3 members per team",
      venue:"DBMS Laboratory, Anna University Regional Campus, Madurai",
      rules:[
        "Coding topics will be auctioned one by one; teams can bid only with their allotted Virtual Coins.",
        "All successful bids are final.",
        "Only the coding problems won in the Auction Round can be attempted during the Coding Round.",
        "Solutions may be implemented in C, C++, Java, or Python.",
        "Unsolved problems incur negative marking.",
        "Teams can purchase a Sealed Power Card, which contains a random advantage or challenge.",
        "In case of a tie, a Tie-Breaker Round will determine the winner."
      ],
      prizes:[
        "Winner: ₹2,000",
        "Runner-up: ₹1,000"
      ],
      fee:"TBA", feeAmount:0, image:"https://placehold.co/900x500/12151C/5B8DEF?text=Code+Auction",
      razorpayLink:"https://pages.razorpay.com/pl_TB28gkZvmVtM7z/view" },

    { slug:"paperexpo", category:"Technical", title:"PaperExpo – Paper Presentation",
      blurb:"Present original research or an applied project across AI/ML, cybersecurity, IoT, or cloud — 10 minutes per team.",
      fullDescription:"PaperExpo is a professional technical paper presentation event designed to encourage students to showcase their innovative ideas, research findings, and technical knowledge. Participants present original research, innovative solutions, or emerging technologies before a panel of experts. The event provides a platform to enhance presentation skills, receive valuable feedback, and network with peers from various engineering disciplines.",
      teamSize:"Individual or a team of up to 3 members",
      venue:"Anna University Regional Campus, Madurai — II Year Classroom, IV Year Classroom, Seminar Hall, and Python Laboratory",
      tracks:[
        "Track 1: Artificial Intelligence & Machine Learning (AI & ML) and Data Science",
        "Track 2: Cybersecurity & Networks",
        "Track 3: Software Engineering & Internet of Things (IoT)",
        "Track 4: Cloud Computing & Database Management"
      ],
      presentationFormat:"10 minutes per team (max): 7 minutes presentation + 3 minutes Q&A",
      prerequisites:[
        "Full paper submission (maximum 10 pages).",
        "Paper format: Times New Roman, Font Size 12, two columns, A4 size.",
        "Presentation (PPT) using the prescribed template."
      ],
      importantDates:{
        paperSubmissionDeadline:"TBA",
        paperAcceptanceNotification:"TBA",
        pptSubmissionAndRegistrationDeadline:"TBA",
        symposiumDate:"TBA"
      },
      eligibility:"Open to students from all engineering disciplines and institutions.",
      rules:[
        "Papers must be original and free from plagiarism.",
        "Maximum paper length is 10 pages in the prescribed format.",
        "A team may consist of 1–3 members.",
        "Participants must submit both the full paper and PPT before the specified deadlines.",
        "Presentation time is strictly limited to 7 minutes, followed by 3 minutes of Q&A.",
        "The judges' decision will be final.",
        "Certificates will be awarded only to registered participants."
      ],
      prizes:[
        "Cash prizes worth ₹6,000 and certificates for winners and participants.",
        "First Prize: ₹3,000 + Winner Certificate",
        "Second Prize: ₹2,000 + Winner Certificate",
        "Third Prize: ₹1,000 + Winner Certificate",
        "Presentation Certificate: provided to all presenters and authors"
      ],
      fee:"TBA", feeAmount:0, image:"https://placehold.co/900x500/12151C/5B8DEF?text=PaperExpo",
      razorpayLink:"https://pages.razorpay.com/pl_TB28gkZvmVtM7z/view" },

    // ---- Non-technical events ----
    { slug:"escape-room", category:"Non-Technical", title:"Escape Room – The Last Evidence",
      blurb:"Step into a detective's shoes and crack a murder mystery before time runs out.",
      fullDescription:"Think you have what it takes to solve a murder mystery? Step into the shoes of a detective and investigate a thrilling crime scene. Analyze evidence, decode hidden clues, eliminate misleading information, and identify the murderer, the weapon, and the motive before time runs out. Teamwork, observation, and logical thinking are the keys to solving the case.",
      teamSize:"3 members per team",
      rules:[
        "Three teams will participate simultaneously, each receiving a different set of clues leading to the same final solution.",
        "The time limit for each team is 10 minutes.",
        "Teams must solve only their assigned clues and should not communicate or share clues with other teams.",
        "Mobile phones, smartwatches, and other electronic devices are strictly prohibited during the event.",
        "Participants must not damage, remove, or tamper with any props, clues, or event materials.",
        "All clues and props must remain inside the event area after use.",
        "The decision of the event coordinators and judges will be final.",
        "Any form of malpractice, clue sharing, or unfair means will result in immediate disqualification.",
        "Participants must maintain discipline and follow the instructions given by the event coordinators."
      ],
      eligibility:[
        "Open to all students participating in the symposium.",
        "Each team must consist of exactly 3 members.",
        "A participant can be a member of only one team.",
        "All participants are expected to abide by the event rules and maintain proper conduct throughout the competition."
      ],
      prizes:["Prizes will be awarded to the First, Second, and Third place teams."],
      fee:"TBA", feeAmount:0, image:"https://placehold.co/900x500/12151C/FFC857?text=Escape+Room",
      razorpayLink:"https://pages.razorpay.com/pl_TB28gkZvmVtM7z/view" },

    { slug:"mission-impossible", category:"Non-Technical", title:"Mission Impossible",
      blurb:"Five checkpoints — observation, logic, memory, and gesture-only communication — to unlock the Final Vault.",
      fullDescription:"A five-checkpoint non-technical event testing observation, logic, memory, communication, and teamwork. Teams collect clues in each round to unlock the Final Vault password.",
      teamSize:"2 members per team",
      rounds:[
        "Observation: View an image for 30 seconds and answer questions.",
        "Logic: Solve brain teasers, number patterns, Sudoku, riddles.",
        "Card Memory: Match face-card pairs by memory.",
        "Communication: One member uses gestures only; teammate guesses.",
        "Final Vault: Combine clues to find the password. First buzzer gets first attempt; maximum three alternate attempts."
      ],
      rules:[
        "2 members per team.",
        "Two teams compete simultaneously.",
        "No electronic gadgets.",
        "No unfair means.",
        "Gestures only in the communication round.",
        "Judges' decision is final."
      ],
      eligibility:"Open to symposium participants.",
      judging:"Time, Accuracy, Teamwork, Least Hints.",
      prizes:["Winner Certificate & Prize.", "Participation gift for teams unlocking the vault."],
      fee:"TBA", feeAmount:0, image:"https://placehold.co/900x500/12151C/FFC857?text=Mission+Impossible",
      razorpayLink:"https://pages.razorpay.com/pl_TB28gkZvmVtM7z/view" },

    { slug:"kadhaikkum-kalam", category:"Non-Technical", title:"Kadhaikkum Kalam",
      blurb:"\"Think. Speak. Convince. Win.\" — a debate with a role-reversal twist in the final. Organized by the CSE Department.",
      fullDescription:"Kadhaikkum Kalam is an exciting debate competition designed to challenge participants' critical thinking, communication skills, and ability to present convincing arguments. The event provides a platform for participants to express their perspectives, analyze different viewpoints, and showcase their confidence through effective debating. The competition consists of two challenging stages — an Elimination Round and a Grand Finale with an innovative role-reversal twist that tests adaptability, spontaneity, and strategic thinking.",
      organizedBy:"Department of Computer Science and Engineering (CSE)",
      teamSize:"3 members per team",
      venue:"Conference Hall",
      rules:[
        "Topics will be allotted through a random draw system.",
        "A toss will determine whether the team will support or oppose the given topic.",
        "Each participant will have 1 minute to present their arguments.",
        "The top two teams from the elimination round will qualify for the Grand Finale.",
        "In the final round, teams must switch their stance after the buzzer and continue the debate from the opposite perspective.",
        "Repetition of previously presented arguments after the role reversal is strictly prohibited.",
        "Participants must maintain respectful communication throughout the event.",
        "The decision of the judges will be final."
      ],
      eligibility:[
        "Open to all students participating in the symposium.",
        "Each team must consist of 3 members.",
        "A participant can be part of only one team.",
        "All participants must adhere to the event rules and regulations."
      ],
      prizes:[
        "Winner Team: ₹2,000 Cash Prize + Certificates",
        "Best Speaker Award: ₹1,000 Cash Prize + Certificate",
        "Participants: Certificates"
      ],
      tagline:"Think. Speak. Convince. Win.",
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
