"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { CheckCircle2, RefreshCw, Sparkles, Home, GraduationCap, Shield, Clock } from 'lucide-react'

// Programme fees in Euro (displayed directly, no conversion)
const programmeFees = [
  { sn: 1, programme: "A - Level", standardPrice: 5950, discountedPrice: 3570, duration: "One Year" },
  { sn: 2, programme: "International University Foundation Programme", standardPrice: 5950, discountedPrice: 3570, duration: "One Year" },
  { sn: 3, programme: "Ontario Secondary School Diploma", standardPrice: 5950, discountedPrice: 3570, duration: "One Year" },
  { sn: 4, programme: "Bachelor Degree Programme", standardPrice: 7650, discountedPrice: 4590, duration: "One Year" },
  { sn: 5, programme: "Master Degree Programme", standardPrice: 7950, discountedPrice: 4770, duration: "One Year" },
]

const accommodationInNaira = [
  { sn: 1, type: "Shortlet Apartment", price: 700000, duration: "Weekly" },
  { sn: 2, type: "Air BnB", price: 315000, duration: "Weekly" },
  { sn: 3, type: "Shared Hostels", price: 105000, duration: "Weekly" },
  { sn: 4, type: "Hotel Apartment", price: 315000, duration: "Weekly" },
]

const Page = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('EUR')
  const [exchangeRates, setExchangeRates] = useState(null)
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState(null)

  // Currency symbols
  const currencySymbols = {
    EUR: '€',
    GBP: '£',
    USD: '$',
    NGN: '₦'
  }

  // Fetch exchange rates from API
  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true)
        // Using exchangerate-api.com (free tier available)
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/NGN')
        const data = await response.json()

        setExchangeRates({
          EUR: data.rates.EUR,
          GBP: data.rates.GBP,
          USD: data.rates.USD,
          NGN: 1
        })
        setLastUpdated(new Date(data.time_last_updated * 1000))
        setLoading(false)
      } catch (error) {
        console.error('Error fetching exchange rates:', error)
        // Fallback rates if API fails
        setExchangeRates({
          EUR: 0.00063,
          GBP: 0.00054,
          USD: 0.00069,
          NGN: 1
        })
        setLastUpdated(new Date())
        setLoading(false)
      }
    }

    fetchRates()
  }, [])

  // Convert price from Naira to selected currency
  const convertPrice = (nairaPrice) => {
    if (!exchangeRates) return nairaPrice
    const converted = nairaPrice * exchangeRates[selectedCurrency]
    return converted.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })
  }

  // Format display price with symbol
  const formatPrice = (nairaPrice) => {
    const symbol = currencySymbols[selectedCurrency]
    const amount = convertPrice(nairaPrice)
    return `${symbol}${amount}`
  }

  // Convert price from Euro to selected currency
  const convertFromEuro = (euroPrice) => {
    if (!exchangeRates) return euroPrice
    if (selectedCurrency === 'EUR') return euroPrice
    const inNgn = euroPrice / exchangeRates.EUR
    const converted = inNgn * exchangeRates[selectedCurrency]
    return converted
  }

  // Format Euro-based price with symbol
  const formatEuroPrice = (euroPrice) => {
    const symbol = currencySymbols[selectedCurrency]
    const amount = convertFromEuro(euroPrice).toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })
    return `${symbol}${amount}`
  }

  return (
    <div className="min-h-screen w-full bg-white">
      <NavBar />

      {/* Hero */}
      <section className="relative bg-linear-to-br from-gray-900 via-red-900 to-gray-900 pt-32 pb-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Transparent Pricing
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Investment in Your <br />
              <span className="text-red-400">Academic Future</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Clear, competitive tuition fees and premium accommodation options designed to support your educational journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Currency Selector */}
      <section className="sticky top-0 z-40 py-4 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-gray-900">Currency:</span>
              <div className="flex gap-2 p-1 bg-gray-100 rounded-xl">
                {['EUR', 'GBP', 'USD', 'NGN'].map((currency) => (
                  <button
                    key={currency}
                    onClick={() => setSelectedCurrency(currency)}
                    className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      selectedCurrency === currency
                        ? 'bg-red-600 text-white shadow-lg scale-105'
                        : 'bg-transparent text-gray-700 hover:text-red-600'
                    }`}
                  >
                    {currencySymbols[currency]} {currency}
                  </button>
                ))}
              </div>
            </div>

            {/* Exchange Rate Info */}
            <div className="flex items-center gap-3">
              {loading ? (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <RefreshCw className="w-4 h-4 animate-spin text-red-600" />
                  <span>Fetching rates...</span>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <div className="bg-linear-to-r from-red-50 to-orange-50 px-4 py-2 rounded-lg border border-red-100">
                    <span className="text-xs font-medium text-gray-700">Exchange Rate:</span>
                    <span className="ml-2 text-sm font-bold text-red-600">
                      {currencySymbols[selectedCurrency]}1 = ₦{exchangeRates?.[selectedCurrency] ? (1 / exchangeRates[selectedCurrency]).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0'}
                    </span>
                  </div>
                  {lastUpdated && (
                    <div className="hidden sm:block text-xs text-gray-500">
                      <Clock className="w-3 h-3 inline mr-1" />
                      {lastUpdated.toLocaleTimeString()}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tuition Fee Per Year */}
      <section className="py-16 bg-linear-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full text-red-600 text-sm font-semibold mb-4">
              <GraduationCap className="w-4 h-4" />
              Annual Tuition
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Programme Fees
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive tuition packages with everything you need to succeed
            </p>
            <p className="text-xs text-red-500 mt-3 font-medium">
              Click the currency selector above to view prices in your preferred currency
            </p>
          </motion.div>

          <div className="grid gap-6 mb-12">
            {programmeFees.map((fee, index) => (
              <motion.div
                key={fee.sn}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 bg-linear-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
                      {fee.sn}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{fee.programme}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{fee.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm text-gray-600 mb-1">Annual Fee</div>
                      <div className="flex items-center gap-2 justify-end">
                        <span className="text-xl text-gray-400 line-through">{formatEuroPrice(fee.standardPrice)}</span>
                        <span className="text-3xl font-bold text-red-600">{formatEuroPrice(fee.discountedPrice)}</span>
                      </div>
                      <div className="text-xs text-green-600 font-semibold mt-1">Save {Math.round((1 - fee.discountedPrice / fee.standardPrice) * 100)}%</div>
                    </div>
                    <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full -rotate-6">
                      -{Math.round((1 - fee.discountedPrice / fee.standardPrice) * 100)}%
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-green-600 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">What&apos;s Included</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Tuition fees',
                  'Application fees',
                  'Enrollment fees',
                  'Exam fees',
                  'Study materials',
                  'College T-shirt',
                  'University Application Support'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-800">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-linear-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-orange-600 rounded-lg">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Additional Costs</h3>
            </div>
              <ul className="space-y-3">
                {['Accommodation', 'Medical Fees', 'Laboratory'].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-800">
                    <div className="w-5 h-5 rounded-full border-2 border-orange-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-orange-200">
                <p className="text-sm text-gray-700 leading-relaxed">
                  These items are not included in tuition but can be arranged through our support services.
                </p>
            </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-600 text-sm font-semibold mb-4">
              <Home className="w-4 h-4" />
              Student Housing
          </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Accommodation
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your home away from home matters. We&apos;ve partnered with trusted providers to offer safe, comfortable, and convenient living spaces.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Shield, title: 'Security & Safety', desc: 'Located in secure neighborhoods with 24/7 facilities' },
              { icon: Home, title: 'Comfort & Style', desc: 'Fully furnished apartments ready from day one' },
              { icon: GraduationCap, title: 'Campus Proximity', desc: 'Short distance to campus and essential services' },
              { icon: CheckCircle2, title: 'Flexible Options', desc: 'Shared or private units to suit your preference' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-linear-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Accommodation Options</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {accommodationInNaira.map((acc, index) => (
                <motion.div
                  key={acc.sn}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold text-sm">
                          {acc.sn}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">{acc.type}</h4>
                      </div>
                      {/* <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{acc.duration}</span>
                      </div> */}
                    </div>
                    <Home className="w-8 h-8 text-gray-300 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                    <div className="text-sm text-gray-600 mb-1">From</div>
                    <div className="text-3xl font-bold text-blue-600">{formatPrice(acc.price)}</div>
                    <div className="text-xs text-gray-500 mt-1">per {acc.duration.toLowerCase()}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 border border-blue-200"
          >
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Need Help Finding Your Perfect Home?</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our dedicated accommodation team is here to guide you through the process. We&apos;ll help you find the perfect place that matches your budget, preferences, and lifestyle.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                <span>Contact Us for Support</span>
                <CheckCircle2 className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Currency Conversion Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 bg-linear-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-amber-100 rounded-lg shrink-0">
                <Sparkles className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Live Currency Conversion</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  All prices are shown in Nigerian Naira (NGN) and converted to your selected currency using real-time exchange rates.
                  Rates update regularly but may fluctuate. For guaranteed pricing and payment plans, please contact our admissions team.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linear-to-br from-gray-900 via-red-900 to-gray-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              Start Your Journey
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Begin Your <br />
              <span className="text-red-400">Academic Journey?</span>
            </h3>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Take the first step towards your future. Our admissions team is ready to discuss fees, payment plans, and accommodation options.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/colleges/apply"
                className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-200 shadow-2xl hover:shadow-red-500/50 hover:scale-105"
              >
                <span>Apply Now</span>
                <CheckCircle2 className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all duration-200"
              >
                <span>Download Brochure</span>
                <Sparkles className="w-5 h-5" />
              </a>
          </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Page
