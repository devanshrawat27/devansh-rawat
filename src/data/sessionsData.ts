export interface SessionData {
  id: number;
  title: string;
  summary: string;
  learnings: string[];
  reflection: string;
}

export const SESSIONS_DATA: SessionData[] = [
  {
    id: 1,
    title: "Basic Introduction with Ma'am",
    summary: "Our inaugural session established the foundation for the entire course. Dr. Anubha Pundir introduced the curriculum objectives, assessment criteria, and the overarching philosophy of holistic employability development. We participated in icebreaker activities that fostered a collaborative classroom environment. Each student shared their career aspirations, academic backgrounds, and personal expectations from the course. This session demystified the concept of 'soft skills' and positioned them as critical complements to technical expertise. We discussed industry trends, employer expectations, and the gap that often exists between academic training and professional requirements.",
    learnings: [
      "Understanding the critical role of employability skills in career success beyond technical knowledge",
      "Building rapport with peers and mentor through structured icebreaker exercises",
      "Setting clear, measurable expectations for personal growth throughout the course duration"
    ],
    reflection: "This session was an eye-opener. I realized that technical skills alone won't guarantee success in today's competitive landscape—how I communicate, collaborate, and present myself matters equally."
  },
  {
    id: 2,
    title: "Career Objective & Goals",
    summary: "This session focused on strategic career planning and goal articulation. We learned the SMART framework (Specific, Measurable, Achievable, Relevant, Time-bound) for goal setting. Dr. Pundir guided us through introspective exercises to identify our core strengths, interests, and values. We mapped short-term objectives (next 6-12 months), medium-term milestones (2-3 years), and long-term aspirations (5+ years). The session emphasized aligning personal passions with market realities. We analyzed successful career trajectories in the tech industry and identified patterns of continuous learning and adaptability. Peer discussions revealed diverse perspectives on career pathways, from entrepreneurship to research to corporate roles.",
    learnings: [
      "Crafting SMART career objectives that balance ambition with realistic timelines and resources",
      "Conducting self-assessment to identify unique strengths and areas requiring development",
      "Understanding the importance of flexibility and continuous recalibration in career planning"
    ],
    reflection: "Defining my goals with clarity gave me a sense of direction I hadn't experienced before. I now have a roadmap instead of vague aspirations, and I'm committed to tracking my progress quarterly."
  },
  {
    id: 3,
    title: "Resume Writing",
    summary: "An intensive workshop on crafting ATS-optimized, recruiter-friendly resumes. We dissected exemplary resumes from successful professionals and identified common pitfalls in student CVs: vague descriptions, lack of quantification, and poor formatting. Dr. Pundir emphasized the power of action verbs and achievement-oriented bullet points. We learned to tailor resumes for specific job descriptions, highlighting relevant skills and experiences. The session covered technical aspects: optimal font choices, margin settings, section ordering, and keyword optimization for Applicant Tracking Systems. Each student drafted or revised their resume, receiving peer and mentor feedback. We also explored digital portfolios and LinkedIn profiles as complementary tools for personal branding.",
    learnings: [
      "Writing achievement-focused bullet points using strong action verbs and quantifiable metrics",
      "Optimizing resume structure and keywords for ATS compatibility without sacrificing readability",
      "Tailoring content strategically for different job applications while maintaining authenticity"
    ],
    reflection: "I transformed my resume from a passive list of duties to a compelling narrative of impact. The before-and-after comparison was striking—my revised resume now tells the story of what I've accomplished, not just what I've done."
  },
  {
    id: 4,
    title: "Introduction to TAT (Thematic Apperception Test)",
    summary: "We were introduced to the Thematic Apperception Test, a psychometric tool used in SSB (Services Selection Board) interviews and corporate assessments to gauge imagination, emotional intelligence, and storytelling ability under pressure. Dr. Pundir explained TAT's purpose: to reveal subconscious attitudes, motivations, and problem-solving approaches through spontaneous narrative creation. Students were shown an ambiguous image and given limited time (4 minutes) to construct a coherent story covering: what led to the situation, what's happening, and what the outcome will be. The emphasis was on positivity, practicality, and revealing leadership or collaborative qualities. After writing, we presented our stories, learning to articulate thoughts clearly and confidently even with minimal preparation time.",
    learnings: [
      "Interpreting ambiguous visual stimuli quickly and constructing logical, positive narratives",
      "Managing time pressure while maintaining creativity and coherent story structure",
      "Presenting spontaneous thoughts verbally with confidence and clarity"
    ],
    reflection: "TAT pushed me out of my comfort zone. I discovered I could think on my feet better than I believed, and the exercise sharpened my ability to structure thoughts rapidly—an invaluable skill for interviews and presentations."
  },
  {
    id: 5,
    title: "Story Writing",
    summary: "Building on TAT principles, this session deepened our creative and analytical writing skills. We were presented with a partially blurred or abstract image, requiring us to infer context and imagine scenarios. Unlike TAT, this exercise allowed slightly more time (7-8 minutes) to develop richer narratives with character development, conflict, and resolution. Dr. Pundir emphasized narrative arc, descriptive language, and emotional resonance. After individual writing, students shared stories in small groups, followed by select presentations to the full class. Constructive peer feedback highlighted diverse interpretations of the same image, teaching us that perspective shapes narrative and that multiple valid approaches exist to any problem.",
    learnings: [
      "Developing complete narrative arcs with clear beginnings, conflicts, and resolutions",
      "Enhancing descriptive writing skills to create vivid, engaging content under time constraints",
      "Appreciating diverse perspectives through peer storytelling and collaborative critique"
    ],
    reflection: "This exercise unlocked a creative dimension I rarely explored in technical coursework. I learned that storytelling isn't just for writers—it's essential for explaining ideas, pitching projects, and connecting with audiences in any field."
  },
  {
    id: 6,
    title: "SRT (Situation Reaction Test)",
    summary: "The Situation Reaction Test session trained us to respond decisively and ethically to hypothetical scenarios. We were presented with 60 situations (e.g., 'You discover a classmate cheating during an exam') and required to write immediate, practical responses. The goal was to reveal character traits: honesty, presence of mind, leadership, and responsibility. Dr. Pundir emphasized that SRT responses should be realistic, not idealistic or overly dramatic. We learned to balance empathy with practicality, initiative with collaboration, and individual action with seeking appropriate authority. Post-exercise, we discussed responses in groups, identifying patterns of decision-making and areas where we defaulted to passive or impulsive reactions. The session highlighted the importance of composed, thoughtful responses under pressure—a critical professional skill.",
    learnings: [
      "Making quick, ethically sound decisions in high-pressure, ambiguous situations",
      "Demonstrating balanced judgment that combines initiative, empathy, and practicality",
      "Recognizing personal behavioral patterns and refining instinctive reaction strategies"
    ],
    reflection: "SRT was mentally exhausting but incredibly revealing. I noticed I tend to overthink in emergencies, which can delay action. This awareness has made me more conscious of cultivating decisiveness balanced with thoughtfulness in real-world scenarios."
  },
  {
    id: 7,
    title: "Group Discussion: Role of Cashless Economy",
    summary: "Our first structured group discussion tackled the timely and multifaceted topic of India's transition toward a cashless economy. Four to five students formed each discussion group, and we were given 15 minutes to debate the benefits, challenges, and socio-economic implications. The debate touched on financial inclusion, digital literacy, cybersecurity risks, and infrastructure readiness. I took on a proactive role, initiating points and ensuring quieter members had opportunities to contribute. The session taught us the art of persuasive argumentation, active listening, and respectful disagreement. Dr. Pundir evaluated not just content knowledge but also communication clarity, body language, turn-taking, and the ability to synthesize others' points into coherent conclusions.",
    learnings: [
      "Articulating well-researched, balanced arguments in a competitive discussion environment",
      "Practicing active listening and integrating others' viewpoints to build on or counter ideas",
      "Demonstrating leadership by facilitating inclusive dialogue and managing group dynamics"
    ],
    reflection: "Leading the discussion was exhilarating and challenging. I learned that being heard isn't about speaking the most—it's about speaking meaningfully and creating space for others. This balance is something I'll carry into professional team settings."
  },
  {
    id: 8,
    title: "Group Discussion: 'Why Privacy is a Luxury'",
    summary: "This provocative topic examined the erosion of privacy in the digital age. Our group of four debated whether privacy has become an elite privilege inaccessible to average citizens due to pervasive data collection, surveillance capitalism, and inadequate legal protections. Arguments ranged from technological inevitability to ethical responsibility of corporations and governments. The 4-minute format demanded concise, impactful contributions. I focused on presenting data-driven points while acknowledging counterarguments. The discussion revealed the complexity of contemporary issues and the necessity of nuanced thinking. Dr. Pundir emphasized that recruiters value candidates who can navigate ambiguity and present informed opinions without resorting to extremes. Post-discussion, we reflected on our performance, identifying moments of strong impact and areas where we could have been more persuasive or concise.",
    learnings: [
      "Navigating complex, ambiguous topics with nuanced, evidence-based arguments",
      "Delivering concise, high-impact contributions within strict time constraints",
      "Balancing assertiveness with openness to opposing views in collaborative debates"
    ],
    reflection: "This discussion taught me that strong opinions must be held lightly. I realized I was initially defensive when challenged, but embracing critique actually strengthened my argument. Intellectual humility is a professional asset I'm actively developing."
  },
  {
    id: 9,
    title: "Essay Writing",
    summary: "The final session focused on structured essay composition—a skill tested in entrance exams, job applications, and professional communications. Dr. Pundir outlined the classic essay framework: introduction (hook + thesis), body paragraphs (each with a clear topic sentence, supporting evidence, and analysis), and conclusion (summary + broader implications). We practiced writing on diverse topics: technology's impact on society, environmental sustainability, leadership qualities, etc. Emphasis was placed on logical flow, coherence, varied sentence structure, and avoiding verbosity. Time management was critical; we had 30 minutes to plan, write, and revise a 400-500 word essay. Peer review sessions followed, where we critiqued each other's work for clarity, argumentation strength, and grammatical accuracy. This exercise reinforced that effective writing is iterative and benefits immensely from external feedback.",
    learnings: [
      "Constructing logically organized essays with clear thesis statements and supporting evidence",
      "Managing time effectively to plan, execute, and revise written work under pressure",
      "Incorporating peer feedback to refine argumentation and improve clarity and impact"
    ],
    reflection: "Essay writing tied together all previous learnings: clarity of thought from goal-setting, structured argumentation from GDs, and creativity from story writing. I now approach written communication with confidence, knowing I can articulate complex ideas coherently and persuasively."
  }
];
