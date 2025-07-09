import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Users, TrendingUp, Target, Zap, BookOpen, Award } from "lucide-react"
import Image from "next/image"

export default function EbookLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#FE4f02] text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-xl font-bold">Strategy Signal</div>
          <Button variant="secondary" size="sm">
            Get Your Copy
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FE4f02] to-[#ea580c] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-[#fb923c] text-white border-none">📚 BESTSELLING E-BOOK</Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Master Strategic
                <br />
                <span className="text-orange-200">Thinking</span>
                <br />
                in 30 Days
              </h1>
              <p className="text-xl text-orange-100 leading-relaxed">
                Transform your decision-making skills with proven frameworks used by Fortune 500 companies. Learn the
                strategic thinking methods that separate leaders from followers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-[#FE4f02] hover:bg-orange-50 font-semibold px-8 py-4 text-lg"
                >
                  Download Now - $29
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-[#FE4f02] px-8 py-4 text-lg bg-transparent"
                >
                  Preview Chapters
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-400 rounded-lg transform rotate-3"></div>
                <div className="relative bg-white p-8 rounded-lg shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Strategic Thinking E-book Cover"
                    width={300}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Company Logos */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 mb-8">Trusted by professionals at leading companies</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            {["Google", "Microsoft", "Apple", "Amazon", "Meta", "Netflix"].map((company) => (
              <div key={company} className="text-center">
                <Image
                  src={`/placeholder.svg?height=40&width=120&query=${company} logo`}
                  alt={`${company} logo`}
                  width={120}
                  height={40}
                  className="mx-auto grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future-Proof Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Future-Proof Your Career</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                In today's rapidly changing business landscape, strategic thinking isn't just an advantage—it's
                essential. This comprehensive guide provides you with the mental models and frameworks used by top
                executives to navigate complexity and drive results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#FE4f02] mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Learn 15+ proven strategic frameworks</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#FE4f02] mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Master decision-making under uncertainty</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#FE4f02] mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Develop long-term thinking capabilities</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Strategic thinking presentation"
                  width={600}
                  height={400}
                  className="w-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <Button size="lg" className="bg-[#FE4f02] hover:bg-[#ea580c] rounded-full p-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Discover */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Inside Strategic Thinking Mastery, You'll Discover:
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Target className="text-[#FE4f02]" size={24} />
                <h3 className="text-xl font-semibold">Strategic Frameworks</h3>
              </div>
              <p className="text-gray-600">
                Master proven frameworks like SWOT 2.0, Blue Ocean Strategy, and the Strategy Canvas to analyze any
                business situation.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="text-[#FE4f02]" size={24} />
                <h3 className="text-xl font-semibold">Market Analysis</h3>
              </div>
              <p className="text-gray-600">
                Learn to identify market opportunities, assess competitive landscapes, and predict industry trends
                before they happen.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="text-[#FE4f02]" size={24} />
                <h3 className="text-xl font-semibold">Leadership Strategy</h3>
              </div>
              <p className="text-gray-600">
                Develop the strategic mindset needed to lead teams, influence stakeholders, and drive organizational
                change.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Zap className="text-[#FE4f02]" size={24} />
                <h3 className="text-xl font-semibold">Quick Decision Making</h3>
              </div>
              <p className="text-gray-600">
                Build mental models for rapid decision-making without sacrificing quality or strategic thinking.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <BookOpen className="text-[#FE4f02]" size={24} />
                <h3 className="text-xl font-semibold">Case Studies</h3>
              </div>
              <p className="text-gray-600">
                Study real-world examples from companies like Apple, Amazon, and Tesla to see strategic thinking in
                action.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Award className="text-[#FE4f02]" size={24} />
                <h3 className="text-xl font-semibold">Implementation Tools</h3>
              </div>
              <p className="text-gray-600">
                Get practical templates, worksheets, and checklists to immediately apply what you learn in your role.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-[#FE4f02] hover:bg-[#ea580c] px-8 py-4 text-lg">
              Start Learning Today
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Readers Are Saying</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "VP of Strategy, TechCorp",
                content:
                  "This book transformed how I approach strategic planning. The frameworks are practical and immediately applicable. I've already implemented three strategies that increased our market share by 15%.",
                rating: 5,
              },
              {
                name: "Michael Rodriguez",
                role: "Management Consultant",
                content:
                  "As a consultant, I need to think strategically for multiple clients. This e-book gave me a systematic approach that I use in every engagement. My clients have noticed the difference.",
                rating: 5,
              },
              {
                name: "Emily Johnson",
                role: "Startup Founder",
                content:
                  "The strategic thinking principles in this book helped me pivot my startup at the right time. We went from struggling to profitable in 6 months. Worth every penny and more.",
                rating: 5,
              },
              {
                name: "David Park",
                role: "Product Manager, Fortune 500",
                content:
                  "I've read dozens of strategy books, but this one stands out. The author breaks down complex concepts into actionable insights. My product launches have been much more successful since reading this.",
                rating: 5,
              },
              {
                name: "Lisa Thompson",
                role: "Executive Coach",
                content:
                  "I recommend this book to all my executive clients. The strategic frameworks are gold. Several clients have been promoted after applying these principles.",
                rating: 5,
              },
              {
                name: "James Wilson",
                role: "Operations Director",
                content:
                  "Strategic thinking was always abstract to me until I read this book. Now I have concrete tools and methods. My team's performance has improved dramatically.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-[#fb923c] fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20 bg-[#FE4f02] text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">"I wanted to get my promotion... then I got the corner office."</h2>
              <p className="text-xl text-orange-100 leading-relaxed">
                "After reading Strategic Thinking Mastery, I completely changed how I approached my role. Within 3
                months, I was leading strategic initiatives. Within 6 months, I got the promotion I'd been working
                toward for years. The frameworks in this book don't just teach you to think strategically—they teach you
                to act strategically."
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-lg">— Jennifer Martinez</p>
                <p className="text-orange-200">Senior Director, Global Strategy</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Success story"
                  width={400}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Strategic Thinking: The Ultimate Upgrade for Your Career
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-[#FE4f02]" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategic Vision</h3>
                <p className="text-gray-600">
                  Develop the ability to see the big picture and connect dots others miss. Think 5-10 years ahead.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-[#FE4f02]" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Market Intelligence</h3>
                <p className="text-gray-600">
                  Learn to analyze markets, competitors, and trends to identify opportunities before others.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-[#FE4f02]" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Influence & Leadership</h3>
                <p className="text-gray-600">
                  Build the strategic communication skills to influence stakeholders and lead change initiatives.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-[#FE4f02]" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Rapid Problem Solving</h3>
                <p className="text-gray-600">
                  Master frameworks for breaking down complex problems and finding innovative solutions quickly.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-[#FE4f02]" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Practical Application</h3>
                <p className="text-gray-600">
                  Get templates, worksheets, and tools you can use immediately in your current role.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-[#FE4f02]" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Career Acceleration</h3>
                <p className="text-gray-600">
                  Position yourself for promotions, leadership roles, and higher compensation through strategic
                  thinking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#FE4f02] to-[#ea580c] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Master Strategic Thinking. Transform Your Career.</h2>
            <p className="text-xl text-orange-100 leading-relaxed">
              Join thousands of professionals who have accelerated their careers with strategic thinking mastery.
              Download your copy today and start thinking like a strategist.
            </p>
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=200"
                  alt="Strategic Thinking E-book"
                  width={200}
                  height={300}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
            <div className="space-y-4">
              <Button size="lg" className="bg-white text-[#FE4f02] hover:bg-orange-50 font-semibold px-12 py-4 text-xl">
                Get Instant Access - $29
              </Button>
              <p className="text-orange-200">
                ✓ Instant download ✓ 30-day money-back guarantee ✓ Bonus templates included
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Get Free Strategic Thinking Tips</h3>
            <p className="text-gray-600">
              Join our newsletter for weekly insights on strategic thinking, leadership, and career advancement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email address" className="flex-1" />
              <Button className="bg-[#FE4f02] hover:bg-[#ea580c]">Subscribe</Button>
            </div>
            <p className="text-sm text-gray-500">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Strategic Thinking Mastery</h4>
              <p className="text-gray-400">Transform your career with proven strategic thinking frameworks.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Preview
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Medium
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Strategic Thinking Mastery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
