import Image from "next/image"
import { Shield, Code2, Server, Smartphone, Terminal, Wrench } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillsSection() {
  return (
    <section id="skills" className="relative bg-muted/30 py-24 md:py-32">
      <div className="container px-4">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary underline">
            Expertise
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Security-first development across the stack
          </p>
        </div>

        {/* Two-Column Layout: Security vs Development */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* LEFT COLUMN - Cybersecurity Expertise */}
          <div className="space-y-6">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Cybersecurity Expertise</h3>
            </div>

            <div className="space-y-6">
              {/* Network Security */}
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-lg">Network Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      Network monitoring
                    </span>
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      Firewall awareness
                    </span>
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      Packet analysis
                    </span>
                     <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      Malware analysis
                    </span>
                  </div>
                  
                  {/* Decorative Network Security Icon */}
                  <div className="pointer-events-none absolute -bottom-4 -right-4 h-32 w-32 opacity-[0.08] dark:opacity-[0.12]">
                    <div className="relative h-full w-full">
                      <Image
                        src="/network-sec.png"
                        alt=""
                        fill
                        className="object-contain"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Web Application Security */}
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-lg">Web Application Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      OWASP Top 10
                    </span>
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      Secure authentication
                    </span>
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      Authorization
                    </span>
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      Input validation
                    </span>
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      Vulnerability mitigation
                    </span>
                  </div>
                  
                  {/* Decorative Web Security Icon */}
                  <div className="pointer-events-none absolute -bottom-4 -right-4 h-32 w-32 opacity-[0.08] dark:opacity-[0.12]">
                    <div className="relative h-full w-full">
                      <Image
                        src="/web-security.png"
                        alt=""
                        fill
                        className="object-contain"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Penetration Testing */}
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-lg">Penetration Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      Manual testing
                    </span>
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      Exploitation basics
                    </span>
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      Vulnerability scanning 
                    </span>
                  </div>
                  
                  {/* Decorative Penetration Testing Icon */}
                  <div className="pointer-events-none absolute -bottom-4 -right-4 h-32 w-32 opacity-[0.08] dark:opacity-[0.12]">
                    <div className="relative h-full w-full">
                      <Image
                        src="/pentest.png"
                        alt=""
                        fill
                        className="object-contain"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* SIEM & Monitoring */}
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-lg">SIEM & Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      Log analysis
                    </span>
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      Incident awareness
                    </span>
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      Alert triage
                    </span>
                  </div>
                  
                  {/* Decorative SIEM Icon */}
                  <div className="pointer-events-none absolute -bottom-4 -right-4 h-32 w-32 opacity-[0.08] dark:opacity-[0.12]">
                    <div className="relative h-full w-full">
                      <Image
                        src="/SIEM.png"
                        alt=""
                        fill
                        className="object-contain"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>


            </div>
          </div>

          {/* RIGHT COLUMN - Development & Engineering */}
          <div className="space-y-6">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Development & Engineering</h3>
            </div>

            <div className="space-y-6">
              {/* Backend & Web Development */}
              <Card className="relative overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-3 space-y-0">
                  <Server className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Backend & Web Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      Django
                    </span>
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      Laravel
                    </span>
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      RESTful APIs
                    </span>
                  </div>
                  
                  {/* Decorative Laravel Icon */}
                  <div className="pointer-events-none absolute -bottom-4 -right-4 h-32 w-32 opacity-[0.08] dark:opacity-[0.12]">
                    <div className="relative h-full w-full">
                      <Image
                        src="/laravel.png"
                        alt=""
                        fill
                        className="object-contain"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mobile Development */}
              <Card className="relative overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-3 space-y-0">
                  <Smartphone className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Mobile Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      Android
                    </span>
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      Flutter
                    </span>
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      React
                    </span>
                  </div>
                  
                  {/* Decorative Flutter Icon */}
                  <div className="pointer-events-none absolute -bottom-4 -right-4 h-32 w-32 opacity-[0.08] dark:opacity-[0.12]">
                    <div className="relative h-full w-full">
                      <Image
                        src="/flutter.png"
                        alt=""
                        fill
                        className="object-contain"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Systems & Infrastructure */}
              <Card className="relative overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-3 space-y-0">
                  <Terminal className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Systems & Infrastructure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      System administration
                    </span>
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      Troubleshooting
                    </span>
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      Linux
                    </span>
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      System design
                    </span>
                  </div>
                  
                  {/* Decorative Hacker Icon */}
                  <div className="pointer-events-none absolute -bottom-4 -right-4 h-32 w-32 opacity-[0.08] dark:opacity-[0.12]">
                    <div className="relative h-full w-full">
                      <Image
                        src="/hacker.png"
                        alt=""
                        fill
                        className="object-contain"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Programming & Tooling */}
              <Card className="relative overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-3 space-y-0">
                  <Wrench className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Programming & Tooling</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      Python
                    </span>
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      PHP
                    </span>
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      Git & GitHub
                    </span>
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      Docker
                    </span>
                    <span className="rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                      CI/CD pipelines
                    </span>
                  </div>
                  
                  {/* Decorative Python Icon */}
                  <div className="pointer-events-none absolute -bottom-4 -right-4 h-32 w-32 opacity-[0.08] dark:opacity-[0.12]">
                    <div className="relative h-full w-full">
                      <Image
                        src="/python.png"
                        alt=""
                        fill
                        className="object-contain"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Security Tools Scrolling Strip */}
      <div className="relative mt-20 overflow-hidden py-12">
        {/* Left Edge Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-muted/30 via-muted/30 to-transparent" />
        
        {/* Right Edge Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-muted/30 via-muted/30 to-transparent" />
        
        {/* Scrolling Track */}
        <div className="scroll-container flex overflow-hidden">
          <div className="animate-scroll flex shrink-0 items-center justify-center gap-16 pr-16">
            {/* First Set of Tools */}
            <div className="group flex h-20 w-20 items-center justify-center rounded-xl bg-background/80 p-4 shadow-sm transition-all hover:scale-110 hover:bg-background hover:shadow-lg">
              <div className="relative h-full w-full opacity-50 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0">
                <Image
                  src="/burpsuit.webp"
                  alt="Burp Suite"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="group flex h-20 w-20 items-center justify-center rounded-xl bg-background/80 p-4 shadow-sm transition-all hover:scale-110 hover:bg-background hover:shadow-lg">
              <div className="relative h-full w-full opacity-50 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0">
                <Image
                  src="/metasploit.png"
                  alt="Metasploit"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="group flex h-20 w-20 items-center justify-center rounded-xl bg-background/80 p-4 shadow-sm transition-all hover:scale-110 hover:bg-background hover:shadow-lg">
              <div className="relative h-full w-full opacity-50 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0">
                <Image
                  src="/icons8-nmap-100.png"
                  alt="Nmap"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="group flex h-20 w-20 items-center justify-center rounded-xl bg-background/80 p-4 shadow-sm transition-all hover:scale-110 hover:bg-background hover:shadow-lg">
              <div className="relative h-full w-full opacity-50 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0">
                <Image
                  src="/splunk.png"
                  alt="Splunk"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="group flex h-20 w-20 items-center justify-center rounded-xl bg-background/80 p-4 shadow-sm transition-all hover:scale-110 hover:bg-background hover:shadow-lg">
              <div className="relative h-full w-full opacity-50 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0">
                <Image
                  src="/zap.png"
                  alt="OWASP ZAP"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="group flex h-20 w-20 items-center justify-center rounded-xl bg-background/80 p-4 shadow-sm transition-all hover:scale-110 hover:bg-background hover:shadow-lg">
              <div className="relative h-full w-full opacity-50 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0">
                <Image
                  src="/nessus.png"
                  alt="Nessus"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="group flex h-20 w-20 items-center justify-center rounded-xl bg-background/80 p-4 shadow-sm transition-all hover:scale-110 hover:bg-background hover:shadow-lg">
              <div className="relative h-full w-full opacity-50 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0">
                <Image
                  src="/wireshark.png"
                  alt="Wireshark"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="group flex h-20 w-20 items-center justify-center rounded-xl bg-background/80 p-4 shadow-sm transition-all hover:scale-110 hover:bg-background hover:shadow-lg">
              <div className="relative h-full w-full opacity-50 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0">
                <Image
                  src="/postman.png"
                  alt="Postman"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="group flex h-20 w-20 items-center justify-center rounded-xl bg-background/80 p-4 shadow-sm transition-all hover:scale-110 hover:bg-background hover:shadow-lg">
              <div className="relative h-full w-full opacity-50 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0">
                <Image
                  src="/autopsy.png"
                  alt="Autopsy"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="group flex h-20 w-20 items-center justify-center rounded-xl bg-background/80 p-4 shadow-sm transition-all hover:scale-110 hover:bg-background hover:shadow-lg">
              <div className="relative h-full w-full opacity-50 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0">
                <Image
                  src="/gitaction.png"
                  alt="GitHub Actions"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Duplicate Set for Seamless Loop */}
          <div className="animate-scroll flex shrink-0 items-center justify-center gap-16 pr-16">
            <div className="group flex h-20 w-20 items-center justify-center rounded-xl bg-background/80 p-4 shadow-sm transition-all hover:scale-110 hover:bg-background hover:shadow-lg">
              <div className="relative h-full w-full opacity-50 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0">
                <Image
                  src="/burpsuit.webp"
                  alt="Burp Suite"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="group flex h-20 w-20 items-center justify-center rounded-xl bg-background/80 p-4 shadow-sm transition-all hover:scale-110 hover:bg-background hover:shadow-lg">
              <div className="relative h-full w-full opacity-50 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0">
                <Image
                  src="/metasploit.png"
                  alt="Metasploit"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="group flex h-20 w-20 items-center justify-center rounded-xl bg-background/80 p-4 shadow-sm transition-all hover:scale-110 hover:bg-background hover:shadow-lg">
              <div className="relative h-full w-full opacity-50 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0">
                <Image
                  src="/icons8-nmap-100.png"
                  alt="Nmap"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="group flex h-20 w-20 items-center justify-center rounded-xl bg-background/80 p-4 shadow-sm transition-all hover:scale-110 hover:bg-background hover:shadow-lg">
              <div className="relative h-full w-full opacity-50 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0">
                <Image
                  src="/splunk.png"
                  alt="Splunk"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="group flex h-20 w-20 items-center justify-center rounded-xl bg-background/80 p-4 shadow-sm transition-all hover:scale-110 hover:bg-background hover:shadow-lg">
              <div className="relative h-full w-full opacity-50 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0">
                <Image
                  src="/zap.png"
                  alt="OWASP ZAP"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="group flex h-20 w-20 items-center justify-center rounded-xl bg-background/80 p-4 shadow-sm transition-all hover:scale-110 hover:bg-background hover:shadow-lg">
              <div className="relative h-full w-full opacity-50 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0">
                <Image
                  src="/nessus.png"
                  alt="Nessus"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="group flex h-20 w-20 items-center justify-center rounded-xl bg-background/80 p-4 shadow-sm transition-all hover:scale-110 hover:bg-background hover:shadow-lg">
              <div className="relative h-full w-full opacity-50 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0">
                <Image
                  src="/wireshark.png"
                  alt="Wireshark"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="group flex h-20 w-20 items-center justify-center rounded-xl bg-background/80 p-4 shadow-sm transition-all hover:scale-110 hover:bg-background hover:shadow-lg">
              <div className="relative h-full w-full opacity-50 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0">
                <Image
                  src="/postman.png"
                  alt="Postman"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="group flex h-20 w-20 items-center justify-center rounded-xl bg-background/80 p-4 shadow-sm transition-all hover:scale-110 hover:bg-background hover:shadow-lg">
              <div className="relative h-full w-full opacity-50 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0">
                <Image
                  src="/autopsy.png"
                  alt="Autopsy"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="group flex h-20 w-20 items-center justify-center rounded-xl bg-background/80 p-4 shadow-sm transition-all hover:scale-110 hover:bg-background hover:shadow-lg">
              <div className="relative h-full w-full opacity-50 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0">
                <Image
                  src="/gitaction.png"
                  alt="GitHub Actions"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
