"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { Server, Monitor, Network, Zap, Github, Mail, Phone, MapPin, Menu, X, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-background"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Server className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">till-bx</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#projects" className="transition-colors hover:text-primary">
                Projekte
              </Link>
              <Link href="#gallery" className="transition-colors hover:text-primary">
                Galerie
              </Link>
              <Link href="#about" className="transition-colors hover:text-primary">
                Über mich
              </Link>
              <Link href="#faq" className="transition-colors hover:text-primary">
                FAQ
              </Link>
              <Link href="#contact" className="transition-colors hover:text-primary">
                Kontakt
              </Link>
            </nav>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={toggleMenu} className="p-2">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <nav className="container py-4 flex flex-col space-y-3">
              <Link
                href="#projects"
                className="text-sm font-medium transition-colors hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Projekte
              </Link>
              <Link
                href="#gallery"
                className="text-sm font-medium transition-colors hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Galerie
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium transition-colors hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Über mich
              </Link>
              <Link
                href="#faq"
                className="text-sm font-medium transition-colors hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium transition-colors hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
            </nav>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative container space-y-6 py-12 md:py-16 lg:py-24 overflow-hidden">
        {/* Minimalist grid background */}
        <div className="absolute inset-0 grid-pattern opacity-50"></div>

        <div className="relative z-10 mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center animate-fade-in">
          <div className="float-animation">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
              <span className="gradient-text">Homeserver & PC`s </span>
              <br className="hidden sm:inline" />
              <span className="text-primary">von till-bx</span>
            </h1>
          </div>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl leading-relaxed">
            Einrichtung und Optimierung von Homeservern, Homelabs und PC-Systemen. Von der Planung bis
            zur Wartung - alles aus einer Hand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" asChild className="text-base px-8 pulse-glow">
              <Link href="#projects">Das biete ich</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-base px-8 glass bg-transparent">
              <Link href="#contact">Kontakt aufnehmen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container space-y-8 py-12 md:py-16 lg:py-24">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">Das biete ich</h2>
          <p className="max-w-[600px] text-lg text-muted-foreground">
            Eine kurze und kleine Auswahl meiner Angebote im Bereich Homeserver und PC-Technik
          </p>
        </div>

        <div className="mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-[1200px]">
          <Card className="flex flex-col modern-card">
            <div className="relative h-48 w-full">
              <Image src="/images/homeserver-setup.jpg" alt="Homeserver Setup" fill className="object-cover" />
            </div>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-muted">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Homeserver Setup & Konfiguration</CardTitle>
              </div>
              <CardDescription className="text-base">
                Komplette Einrichtung von Homeservern mit Docker, Proxmox und verschiedenen Services
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Aufbau und Konfiguration von Homeservern. Inklusive Virtualisierung, Container-Management, 
                  Backup-Strategien, NAS-Systemen, Homepages, Datenbanken und Remote-Zugriff.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Proxmox</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Linux</Badge>
                  <Badge variant="secondary">Backup</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col modern-card">
            <div className="relative h-48 w-full">
              <Image src="/images/network-rack.jpg" alt="Network Infrastructure" fill className="object-cover" />
            </div>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-muted">
                  <Network className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Netzwerk-Infrastruktur</CardTitle>
              </div>
              <CardDescription className="text-base">
                Planung und Implementierung von Heimnetzwerken und VPN-Lösungen
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Optimierung der Netzwerk-Performance, WLAN, Einrichtung von VLANs, Firewall-Konfiguration und sichere
                  VPN-Verbindungen für Remote-Arbeit und sicheren Zugriff.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">pfSense</Badge>
                  <Badge variant="secondary">VPN</Badge>
                  <Badge variant="secondary">VLAN</Badge>
                  <Badge variant="secondary">Firewall</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col modern-card">
            <div className="relative h-48 w-full">
              <Image src="/images/pc-build.jpg" alt="PC Build" fill className="object-cover" />
            </div>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-muted">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">PC-Optimierung & Builds</CardTitle>
              </div>
              <CardDescription className="text-base">
                Custom PC-Builds und Performance-Optimierung für Gaming und Workstations
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Zusammenstellung und Optimierung von PC-Systemen für verschiedene Anwendungsbereiche. Von Gaming
                  bis hin zu professionellen Workstations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Custom Builds</Badge>
                  <Badge variant="secondary">Gaming</Badge>
                  <Badge variant="secondary">Workstation</Badge>
                  <Badge variant="secondary">Tuning</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col modern-card">
            <div className="relative h-48 w-full">
              <Image src="/images/monitoring-dashboard.jpg" alt="Monitoring Dashboard" fill className="object-cover" />
            </div>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-muted">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Automation & Monitoring</CardTitle>
              </div>
              <CardDescription className="text-base">
                Smart Home Integration und System-Monitoring für Homelab-Umgebungen
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Implementierung von Automatisierungslösungen und Monitoring-Systemen. Integration von Smart Home
                  Komponenten und proaktive Systemüberwachung.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Home Assistant</Badge>
                  <Badge variant="secondary">Grafana</Badge>
                  <Badge variant="secondary">Prometheus</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="container space-y-8 py-12 md:py-16 lg:py-24 bg-muted/50">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">Projekt-Galerie</h2>
          <p className="max-w-[600px] text-lg text-muted-foreground">
            Einblicke in meine abgeschlossenen Projekte und Setups
          </p>
        </div>

        <div className="mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1200px]">
          <div className="relative group overflow-hidden rounded-lg aspect-square">
            <Image
              src="/images/server-room.jpg"
              alt="Server Room Setup"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="font-semibold mb-1">Server Room</h3>
                <p className="text-sm">Professionelles Setup</p>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg aspect-square">
            <Image
              src="/images/workstation-setup.jpg"
              alt="Workstation Setup"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="font-semibold mb-1">Workstation</h3>
                <p className="text-sm">High-End Setup</p>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg aspect-square">
            <Image
              src="/images/network-rack.jpg"
              alt="Network Rack"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="font-semibold mb-1">Network Rack</h3>
                <p className="text-sm">Strukturierte Verkabelung</p>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg aspect-square">
            <Image
              src="/images/monitoring-dashboard.jpg"
              alt="Monitoring Dashboard"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="font-semibold mb-1">Monitoring</h3>
                <p className="text-sm">Grafana Dashboard</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href="#contact">
              Mehr Projekte anfragen
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container space-y-8 py-12 md:py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">Wer bin ich?</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-base">
                  Hallo! Ich bin Till und beschäftige mich mittlerweile seit über 4 Jahren intensiv mit Homeserver-Technologien,
                  Netzwerk-Administration und PC-Hardware. Was als Hobby begann, ist mittlerweile zu meiner Leidenschaft
                  und Expertise geworden. Ich baue und Konfiguriere PCs für Freunde.
                </p>
                <p className="text-base">
                  Meine Erfahrung umfasst die Planung, Implementierung und Wartung von Homelab-Umgebungen verschiedener
                  Größenordnungen. Dabei lege ich besonderen Wert auf Sicherheit, Performance und
                  Benutzerfreundlichkeit.
                </p>
                <p className="text-base">
                  Ob Sie einen einfachen Medienserver einrichten möchten oder eine komplexe Virtualisierungsumgebung
                  benötigen - ich helfe Ihnen dabei, die optimale Lösung für Ihre Anforderungen zu finden und
                  umzusetzen.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="#contact">Projekt besprechen</Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="#projects">Referenzen ansehen</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center order-first lg:order-last">
              <div className="relative">
                <Image
                  src="/images/till-profile.jpg"
                  alt="Till - Homeserver Experte"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container space-y-8 py-12 md:py-16 lg:py-24 bg-muted/50">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">Häufig gestellte Fragen</h2>
          <p className="max-w-[600px] text-lg text-muted-foreground">
            Antworten auf die wichtigsten Fragen rund um Homeserver und PC-Projekte
          </p>
        </div>

        <div className="mx-auto max-w-[800px]">
          <Accordion type="single" collapsible className="w-full space-y-2">
            <AccordionItem value="item-1" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left hover:no-underline">
                Was kostet eine Homeserver-Einrichtung?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Die Kosten variieren je nach Anforderungen und gewünschter Hardware. Eine grundlegende Einrichtung
                beginnt bei etwa 300-500€ für Hardware plus Konfiguration. Komplexere Systeme mit Virtualisierung und
                erweiterten Features können zwischen 1000-3000€ kosten. Gerne erstelle ich Ihnen ein individuelles
                Angebot basierend auf Ihren Bedürfnissen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left hover:no-underline">
                Wie lange dauert die Einrichtung eines Homeservers?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Die Einrichtungszeit hängt von der Komplexität des Projekts ab. Ein einfacher Medienserver kann in 1-2
                Tagen eingerichtet werden, während komplexe Homelab-Umgebungen mit Virtualisierung und mehreren Services
                1-2 Wochen in Anspruch nehmen können. Dies beinhaltet Planung, Installation, Konfiguration und
                ausführliche Tests.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left hover:no-underline">
                Bietest du auch Support und Wartung an?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Ja, ich biete sowohl einmaligen Support als auch regelmäßige Wartungsverträge an. Dies umfasst
                System-Updates, Backup-Überprüfungen, Performance-Monitoring und Fehlerbehebung. Remote-Support ist in
                den meisten Fällen möglich, bei komplexeren Problemen komme ich auch vor Ort vorbei.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left hover:no-underline">
                Berätst du auch vor Ort oder Remote?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Ich berate sie gerne egal ob neuer Home Server, PC, Laptop, Spielekonsole etc.
                Ich kann auch Upgrades an Laptops, PCs, Servern etc durchführen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left hover:no-underline">Ist ein Homeserver sicher?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Bei ordnungsgemäßer Konfiguration ist ein Homeserver sehr sicher. Ich implementiere mehrschichtige
                Sicherheitsmaßnahmen: Firewall-Konfiguration, regelmäßige Updates, sichere VPN-Verbindungen,
                Backup-Strategien und Monitoring. Zusätzlich erhalten Sie eine ausführliche Dokumentation und Schulung
                für den sicheren Betrieb.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left hover:no-underline">
                Vermietest du auch Software?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Ich vermiete auch für schmales Geld einzelne Systeme, oder Anwendungen. Das ist kann durchaus Sinnvoll sein
                falls sie erstmal nur Ausprobieren wollen was alles so möglich ist.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container space-y-8 py-12 md:py-16 lg:py-24">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">Kontakt aufnehmen</h2>
          <p className="max-w-[600px] text-lg text-muted-foreground">
            Bereit für Ihr nächstes Homeserver-Projekt? Lassen Sie uns darüber sprechen!
          </p>
        </div>

        <div className="mx-auto grid max-w-[1000px] gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Projekt besprechen</CardTitle>
              <CardDescription>Erzählen Sie mir von Ihrem Projekt und ich melde mich zeitnah bei Ihnen</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Ihr Name"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  E-Mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="ihre@email.de"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  placeholder="Beschreiben Sie Ihr Projekt..."
                  rows={4}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                />
              </div>
              <Button className="w-full">Nachricht senden</Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Kontaktdaten</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-muted">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">E-Mail</p>
                    <p className="text-sm text-muted-foreground">till.baxmann@gmx.de</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-muted">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-sm text-muted-foreground">+49 (0) 176 40499649</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-muted">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Standort</p>
                    <p className="text-sm text-muted-foreground">Deutschland, 31008 Elze</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Antwortzeit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ich antworte in der Regel innerhalb von 1-2 Stunden auf Anfragen. Bei dringenden Problemen können Sie
                  mich auch telefonisch erreichen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
        {/* Minimalist background elements */}
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-muted/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-muted/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 container py-12 md:py-16">
          {/* Main footer content */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand section */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-muted neon-glow">
                  <Server className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text">till-bx</h3>
                  <p className="text-sm text-muted-foreground">Tech Solutions</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Ihr Ansprechpartner für zuverlässige Homeserver, optimierte PCs und stabile Netzwerke – modern, klar, funktional.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="p-3 rounded-lg glass hover:bg-muted/50 transition-all duration-300 group">
                  <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
                <Link
                  href="mailto:till.baxmann@gmx.de"
                  className="p-3 rounded-lg glass hover:bg-muted/50 transition-all duration-300 group"
                >
                  <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
                <Link
                  href="tel:+4917640499649"
                  className="p-3 rounded-lg glass hover:bg-muted/50 transition-all duration-300 group"
                >
                  <Phone className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#projects" className="hover:text-primary transition-colors">
                    Homeserver Setup
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="hover:text-primary transition-colors">
                    Netzwerk-Infrastruktur
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="hover:text-primary transition-colors">
                    PC-Optimierung
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="hover:text-primary transition-colors">
                    Automation & Monitoring
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#about" className="hover:text-primary transition-colors">
                    Über mich
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="hover:text-primary transition-colors">
                    Galerie
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-primary transition-colors">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>© 2025 till-bx - Alle Rechte vorbehalten</span>
              <span className="hidden md:inline">•</span>
              <Link href="#" className="hover:text-primary transition-colors">
                Datenschutz
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-primary transition-colors">
                Impressum
              </Link>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>System Online</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
