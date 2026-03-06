import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { Heart, Lightbulb, Users, Target, Award, Sparkles } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassion First",
      description: "Every feature, every decision, every interaction is guided by empathy and understanding of the profound emotions involved in preserving memories."
    },
    {
      icon: Lightbulb,
      title: "Innovation with Purpose",
      description: "We leverage cutting-edge AI technology not for its own sake, but to serve a deeply human need: honoring and celebrating life."
    },
    {
      icon: Users,
      title: "Family-Centered",
      description: "Families are at the heart of everything we do. Their stories, their needs, and their feedback shape our product roadmap."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We are committed to the highest standards of quality, security, and reliability because your memories deserve nothing less."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "We operate with complete transparency, ethical AI practices, and unwavering respect for privacy and dignity."
    },
    {
      icon: Sparkles,
      title: "Accessibility",
      description: "Premium memorial experiences should be available to all families, regardless of budget or technical expertise."
    }
  ];

  const milestones = [
    { year: "2021", event: "Company founded with a vision to transform memorial experiences" },
    { year: "2022", event: "Launched AI Memorial Videos to first 100 families" },
    { year: "2023", event: "Introduced Digital Avatars, partnered with 50+ funeral homes" },
    { year: "2024", event: "Serving 50,000+ families globally, expanding international reach" }
  ];

  return (
    <>
      <Section className="pt-32 pb-16 hero-gradient dark:hero-gradient-dark">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6 text-primary dark:text-cream">
              About Maple Oak Digital
            </h1>
            <p className="text-xl text-charcoal-600 dark:text-cream-300 leading-relaxed mb-8">
              Innovation with Heart
            </p>
            <p className="text-lg text-charcoal-600 dark:text-cream-300 leading-relaxed">
              We believe technology should serve humanity's deepest needs. That's why we've dedicated
              ourselves to creating tools that help families honor, remember, and celebrate the lives
              of those they love.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-16">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold font-display mb-6 text-primary dark:text-cream">
                  Our Story
                </h2>
                <div className="space-y-4 text-charcoal-600 dark:text-cream-300 leading-relaxed">
                  <p>
                    Maple Oak Digital was born from a simple observation: while technology had transformed
                    nearly every aspect of our lives, the way we honor and remember loved ones had remained
                    largely unchanged.
                  </p>
                  <p>
                    Our founders, having experienced the loss of family members, saw an opportunity to use
                    emerging AI technology to create more meaningful, personalized memorial experiences.
                    But they also understood that in this deeply emotional space, technology must be wielded
                    with extraordinary care and respect.
                  </p>
                  <p>
                    Today, we serve thousands of families worldwide, helping them transform cherished photos
                    and videos into beautiful AI-powered memorial tributes and lifelike digital avatars that
                    preserve not just memories, but the essence of those we've lost.
                  </p>
                </div>
              </div>
              <div className="bg-accent/10 dark:bg-accent/5 rounded-2xl p-8 border border-accent/30">
                <h3 className="text-2xl font-bold font-display mb-6 text-primary dark:text-cream text-center">
                  Our Mission
                </h3>
                <p className="text-lg text-charcoal-600 dark:text-cream-300 text-center leading-relaxed mb-6">
                  To empower families to celebrate and preserve the memories of their loved ones through
                  innovative, accessible, and respectful AI technology.
                </p>
                <div className="h-px bg-accent/30 my-6"></div>
                <h3 className="text-2xl font-bold font-display mb-6 text-primary dark:text-cream text-center">
                  Our Vision
                </h3>
                <p className="text-lg text-charcoal-600 dark:text-cream-300 text-center leading-relaxed">
                  A world where every family, regardless of means, can create lasting, meaningful tributes
                  that honor the unique life and legacy of those they love.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-16 bg-primary/5 dark:bg-primary/10">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-display mb-4 text-primary dark:text-cream">
              Our Values
            </h2>
            <p className="text-lg text-charcoal-600 dark:text-cream-300 max-w-2xl mx-auto">
              The principles that guide us every day
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white dark:bg-charcoal-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <value.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold font-display mb-3 text-primary dark:text-cream">
                  {value.title}
                </h3>
                <p className="text-charcoal-600 dark:text-cream-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-display mb-4 text-primary dark:text-cream">
                Our Journey
              </h2>
              <p className="text-lg text-charcoal-600 dark:text-cream-300">
                Key milestones in our mission
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30"></div>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-20">
                    <div className="absolute left-0 w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center border-4 border-white dark:border-charcoal-900">
                      <span className="text-sm font-bold text-accent">{milestone.year}</span>
                    </div>
                    <div className="glass-card-light dark:glass-card p-6 rounded-xl">
                      <p className="text-charcoal-600 dark:text-cream-300 leading-relaxed">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-16 bg-primary/5 dark:bg-primary/10">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-display mb-4 text-primary dark:text-cream">
                Our Approach
              </h2>
              <p className="text-lg text-charcoal-600 dark:text-cream-300">
                How we blend technology with compassion
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-charcoal-900 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold font-display mb-4 text-primary dark:text-cream">
                  Technology as a Tool, Not a Replacement
                </h3>
                <p className="text-charcoal-600 dark:text-cream-300 leading-relaxed">
                  We don't believe AI should replace human connection or the grieving process. Instead,
                  our technology serves as a tool to enhance memorial experiences, making them more
                  personal, accessible, and meaningful. We provide the technology; you provide the heart.
                </p>
              </div>

              <div className="bg-white dark:bg-charcoal-900 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold font-display mb-4 text-primary dark:text-cream">
                  Ethical AI Development
                </h3>
                <p className="text-charcoal-600 dark:text-cream-300 leading-relaxed">
                  Every AI model we develop is trained with ethics at the forefront. We use only ethically
                  sourced data, implement rigorous bias testing, and ensure our technology respects the
                  dignity of every individual. We believe innovation must be responsible innovation.
                </p>
              </div>

              <div className="bg-white dark:bg-charcoal-900 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold font-display mb-4 text-primary dark:text-cream">
                  Continuous Improvement Through Feedback
                </h3>
                <p className="text-charcoal-600 dark:text-cream-300 leading-relaxed">
                  We actively listen to the families we serve. Their feedback, suggestions, and stories
                  directly shape our product development. This collaborative approach ensures our tools
                  remain grounded in real needs and meaningful use cases.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold font-display mb-6 text-primary dark:text-cream">
              Join Us on This Journey
            </h2>
            <p className="text-lg text-charcoal-600 dark:text-cream-300 mb-8 leading-relaxed">
              Whether you're a family looking to preserve precious memories, a funeral home seeking
              to enhance your services, or a partner who shares our vision, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-colors duration-300"
              >
                Get in Touch
              </a>
              <a
                href="/partners"
                className="px-8 py-4 bg-white dark:bg-charcoal-900 hover:bg-cream-100 dark:hover:bg-charcoal-800 text-primary dark:text-cream rounded-lg font-semibold transition-colors duration-300 border border-primary/20"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
