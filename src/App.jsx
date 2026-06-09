import { useEffect, useState } from 'react'
import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Handshake,
  House,
  Mail,
  MapPin,
  Phone,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react'
import {
  FaArrowLeftLong,
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa6'
import liorSapirImage from './assets/liorsapir.png'
import soldPropertyOne from './assets/487339389_122118631850731057_5396061651679712396_n.jpg'
import soldPropertyTwo from './assets/487453673_122118630782731057_849140000306665031_n.jpg'
import soldPropertyThree from './assets/597482278_1266771568825804_3290070628278013946_n.jpg'
import soldPropertyFour from './assets/653112260_122162397116731057_6918348651558923895_n.jpg'
import soldPropertyFive from './assets/681265276_122166233630731057_4226364653928849460_n.jpg'
import './App.css'

const agentName = 'ליאור ספיר'
const agentRole = 'יועץ נדל״ן'
const contactLinks = {
  email: 'mailto:Liorsapir60@gmail.com',
  phone: 'tel:+972507403388',
  whatsapp: 'http://wa.me/972507403388',
  instagram: 'https://www.instagram.com/lior_sapir_real_estate/',
  facebook: 'https://www.facebook.com/profile.php?id=61571931723944',
  website: 'https://example.com/',
}

const contactMethods = [
  {
    label: 'מייל',
    href: contactLinks.email,
    icon: Mail,
  },
  {
    label: 'טלפון',
    href: contactLinks.phone,
    icon: Phone,
  },
  {
    label: 'וואטסאפ',
    href: contactLinks.whatsapp,
    icon: FaWhatsapp,
  },
  {
    label: 'אינסטגרם',
    href: contactLinks.instagram,
    icon: FaInstagram,
  },
  {
    label: 'פייסבוק',
    href: contactLinks.facebook,
    icon: FaFacebookF,
  },
  {
    label: 'אתר',
    href: contactLinks.website,
    icon: FaGlobe,
  },
]

const properties = [
  {
    id: 'sold-1',
    title: ' קיבוץ גלויות 29  ',
    location: 'בת ים',
    price: 'פרטים בקרוב',
    description: '5 חדרים',
    image: soldPropertyOne,
  },
  {
    id: 'sold-2',
    title: 'מבצע חירם  5 -נווה ים  ',
    location: 'ראשון לציון',
    price: '1,750,000 ש״ח',
    description: 'מספר חדרים, כתובת ומידע מלא על הנכס יתווספו ברגע שתשלח את הפרטים.',
    image: soldPropertyTwo,
  },
  {
    id: 'sold-3',
    title: 'פייר קניג 17',
    location: 'חולון',
    price: 'פרטים בקרוב',
    description: 'מספר חדרים, כתובת ומידע מלא על הנכס יתווספו ברגע שתשלח את הפרטים.',
    image: soldPropertyThree,
  },
  {
    id: 'sold-4',
    title: 'משה לוי 4 נאות שמיר',
    location: 'רמלה',
    price: 'פרטים בקרוב',
    description: 'מספר חדרים, כתובת ומידע מלא על הנכס יתווספו ברגע שתשלח את הפרטים.',
    image: soldPropertyFour,
  },
  {
    id: 'sold-5',
    title: 'משה לוי 4 נאות שמיר',
    location: 'רמלה',
    price: 'פרטים בקרוב',
    description: 'מספר חדרים, כתובת ומידע מלא על הנכס יתווספו ברגע שתשלח את הפרטים.',
    image: soldPropertyFive,
  },
]

const propertyGroups = properties.reduce((groups, property, index) => {
  if (index % 2 === 0) {
    const nextProperty = properties[(index + 1) % properties.length]
    groups.push([property, nextProperty].filter(Boolean))
  }

  return groups
}, [])

const highlights = [
  'ניסיון בשוק המקומי',
  'ליווי אישי',
  'משא ומתן מקצועי',
]

const services = [
  { label: 'מכירת נכסים', icon: House },
  { label: 'קניית דירה', icon: Building2 },
  { label: 'השקעות נדל״ן', icon: TrendingUp },
  { label: 'הערכת שווי נכס', icon: BadgeCheck },
  { label: 'ליווי משקיעים', icon: Users },
  { label: 'שיווק נכסים', icon: BriefcaseBusiness },
]

const reviews = [
  {
    name: 'דניאל כהן',
    rating: 5,
    review:
      'ליאור ליווה אותנו במכירת הדירה מהשלב הראשון ועד לחתימה בצורה מדויקת ורגועה. הוא ידע לנהל את המשא ומתן נכון, להציג את הנכס בצורה מצוינת ולשמור אותנו מעודכנים לאורך כל הדרך. הרגשנו שיש על מי לסמוך בכל שלב בתהליך.',
  },
  {
    name: 'מיכל לוי',
    rating: 4.5,
    review:
      'הגענו לליאור אחרי תקופה ארוכה שבה חיפשנו את הדירה הנכונה ולא הצלחנו להתקדם. מהר מאוד הוא הבין בדיוק מה אנחנו צריכים, סינן עבורנו נכסים לא רלוונטיים וחסך לנו זמן יקר. בסוף מצאנו נכס מעולה וקיבלנו ממנו ליווי מקצועי עד הסגירה.',
  },
  {
    name: 'אבי ישראלי',
    rating: 5,
    review:
      'מהרגע הראשון היה ברור שליאור עובד בצורה מסודרת, עניינית ואמינה. הוא היה זמין לכל שאלה, נתן לנו ביטחון וקידם את העסקה בקצב הנכון בלי לחץ מיותר. ממליץ עליו לכל מי שרוצה ליווי מקצועי עם יחס אישי.',
  },
  {
    name: 'שני אברהם',
    rating: 5,
    review:
      'ליאור טיפל עבורנו במכירת נכס מורכב עם הרבה רגישות ודיוק. הוא בנה אסטרטגיית שיווק טובה, הביא קונים רציניים בלבד וניהל את כל התהליך בצורה מרשימה. הרגשנו שיש מישהו שמחזיק את הכל בצורה מקצועית עד הפרט האחרון.',
  },
  {
    name: 'רועי חדד',
    rating: 4.5,
    review:
      'חיפשנו דירה להשקעה וליאור ידע לכוון אותנו לאזורים הנכונים בהתאם לתקציב ולמטרות שלנו. הוא הסביר כל שלב בסבלנות, בדק עבורנו פרטים חשובים שלא היינו חושבים עליהם לבד ועזר לנו לקבל החלטה מושכלת. השירות שלו היה חד, ברור ומאוד נעים.',
  },
  {
    name: 'נועה בן דוד',
    rating: 5,
    review:
      'אחד הדברים שהכי בלטו אצל ליאור הוא השקט והביטחון שהוא מקרין לאורך כל התהליך. הוא תמיד היה עם יד על הדופק, דאג לעדכן, להזכיר ולבדוק שהכל מתקדם כמו שצריך. מעבר למקצועיות, קיבלנו גם יחס אנושי חם ומכבד.',
  },
  {
    name: 'איתי פרץ',
    rating: 5,
    review:
      'ליאור ידע לזהות את היתרונות של הנכס שלנו ולהציג אותם נכון לקונים פוטנציאליים. בזכות הניהול שלו הצלחנו להגיע להצעות טובות ולסגור עסקה בתנאים מצוינים. זו הייתה חוויה הרבה יותר רגועה ממה שציפינו.',
  },
  {
    name: 'הילה רוזן',
    rating: 4.5,
    review:
      'חיפשנו מישהו שאפשר באמת לסמוך עליו ובליאור מצאנו בדיוק את זה. הוא היה קשוב, יסודי ומאוד מדויק בפרטים, מה שעזר לנו להרגיש ביטחון בקבלת ההחלטות. לאורך כל הדרך קיבלנו ליווי מסודר, מהיר ומקצועי.',
  },
  {
    name: 'גיא מלול',
    rating: 5,
    review:
      'מהפגישה הראשונה הרגשנו שליאור מבין את השוק ויודע להוביל תהליך בצורה חכמה. הוא היה חד במשא ומתן, מדויק בהמלצות וידע להבליט את מה שחשוב באמת. התוצאה הייתה עסקה מצוינת וליווי ברמה גבוהה מאוד.',
  },
  {
    name: 'טליה אלקיים',
    rating: 5,
    review:
      'ליאור עזר לנו לרכוש דירה ראשונה והפך תהליך מלחיץ למשהו הרבה יותר מסודר וברור. הוא הסביר לנו כל שלב, עזר לנו להבין מה חשוב לבדוק ונתן תחושה שהוא באמת פועל לטובתנו. זו רמת שירות שלא רואים כל יום.',
  },
  {
    name: 'יוסי אדרי',
    rating: 4.5,
    review:
      'העבודה עם ליאור הייתה מדויקת, יעילה ומאוד נעימה. הוא ידע לשלב בין מקצועיות, סבלנות וזמינות גבוהה, והכל בלי לפספס את המטרה העסקית. בזכותו התהליך התקדם חלק והגענו לתוצאה שרצינו.',
  },
  {
    name: 'מורן שמש',
    rating: 5,
    review:
      'ליאור נתן לנו מעטפת מלאה מהרגע הראשון ועד מסירת המפתח. הוא היה זמין, מסודר ועם חשיבה קדימה, כך שכל צומת בדרך הרגישה הרבה יותר פשוטה. ממליצה עליו בלב שלם לכל מי שמחפש ליווי נדל״ני איכותי.',
  },
]

const navItems = [
  { label: 'ראשי', href: '#home', icon: House },
  { label: 'יצירת קשר', href: '#contact', icon: Phone },
  { label: 'נכסים', href: '#properties', icon: Building2 },
  { label: 'אודות', href: '#about', icon: Users },
  { label: 'המלצות', href: '#reviews', icon: Star },
  { label: 'שירותים', href: '#services', icon: Handshake },
]

function ReviewStars({ rating, label }) {
  return (
    <div className="review-stars" aria-label={label}>
      {Array.from({ length: 5 }).map((_, index) => {
        const fillWidth = Math.max(0, Math.min(1, rating - index)) * 100

        return (
          <span className="star-shell" key={`${label}-${index}`}>
            <Star size={18} className="star-base" aria-hidden="true" />
            <span className="star-fill" style={{ width: `${fillWidth}%` }}>
              <Star size={18} fill="currentColor" className="star-active" aria-hidden="true" />
            </span>
          </span>
        )
      })}
    </div>
  )
}

function App() {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0)
  const [activePropertyGroupIndex, setActivePropertyGroupIndex] = useState(0)
  const [leadForm, setLeadForm] = useState({
    fullName: '',
    email: '',
    phone: '',
  })
  const [leadSubmitState, setLeadSubmitState] = useState({
    status: 'idle',
    message: '',
  })

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveReviewIndex((currentIndex) => (currentIndex + 1) % reviews.length)
    }, 5200)

    return () => window.clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (propertyGroups.length <= 1) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActivePropertyGroupIndex((currentIndex) => (currentIndex + 1) % propertyGroups.length)
    }, 14000)

    return () => window.clearInterval(intervalId)
  }, [])

  const visibleProperties =
    propertyGroups.length === 0
      ? []
      : propertyGroups[activePropertyGroupIndex].map((property, index) => ({
          ...property,
          slotKey: `${property.id}-${activePropertyGroupIndex}-${index}`,
        }))
  const visibleReviews =
    reviews.length === 0
      ? []
      : Array.from({ length: Math.min(3, reviews.length) }, (_, index) => {
          const reviewIndex = (activeReviewIndex + index) % reviews.length

          return {
            ...reviews[reviewIndex],
            slotKey: `${reviews[reviewIndex].name}-${index}`,
          }
        })

  const handleLeadFieldChange = ({ target }) => {
    const { name, value } = target

    setLeadForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  const handleLeadSubmit = async (event) => {
    event.preventDefault()

    setLeadSubmitState({
      status: 'submitting',
      message: 'שולח את הפרטים במייל...',
    })

    const formData = new FormData()
    formData.append('name', leadForm.fullName)
    formData.append('email', leadForm.email)
    formData.append('phone', leadForm.phone)
    formData.append('_subject', 'ליד חדש השאיר פרטים!')
    formData.append(
      'message',
      [
        'ליד חדש השאיר פרטים!',
        '',
        'להלן:',
        `שם מלא: ${leadForm.fullName}`,
        `אימייל: ${leadForm.email}`,
        `טלפון: ${leadForm.phone}`,
      ].join('\n'),
    )
    formData.append('_captcha', 'false')
    formData.append('_template', 'table')

    try {
      const response = await fetch('https://formsubmit.co/ajax/Liorsapir60@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setLeadSubmitState({
        status: 'success',
        message: 'הפרטים נשלחו בהצלחה למייל.',
      })
      setLeadForm({
        fullName: '',
        email: '',
        phone: '',
      })
    } catch (error) {
      setLeadSubmitState({
        status: 'error',
        message: 'שליחת המייל נכשלה כרגע. נסו שוב בעוד רגע או צרו קשר בטלפון.',
      })
    }
  }

  return (
    <div className="app-shell" dir="rtl">
      <div className="ambient-orb ambient-orb-left" aria-hidden="true"></div>
      <div className="ambient-orb ambient-orb-right" aria-hidden="true"></div>

      <div className="page-frame">
          <section className="hero-section" id="home">
            <div className="hero-overlay"></div>

            <div className="hero-content">
              <div className="profile-badge">
                <div className="profile-image-wrap">
                  <img src={liorSapirImage} alt={agentName} className="profile-image" />
                </div>
                <div className="profile-meta">
                  <span className="profile-name">{agentName}</span>
                  <span className="profile-role">{agentRole}</span>
                </div>
              </div>

              <div className="hero-copy">
                <p className="hero-kicker">ליווי נדל״ן ברמה אחרת</p>
                <h1>הדרך החכמה לנכס הבא שלך</h1>
                <p className="hero-subtitle">
                  ליווי אישי, מקצועי ואמין בקנייה, מכירה והשקעה בנדל״ן
                </p>
              </div>

              <div className="hero-actions">
                <a className="primary-button" href="#contact">
                  דברו איתי
                </a>
                <a className="secondary-button" href="#properties">
                  לנכסים שנמכרו
                </a>
              </div>
            </div>
          </section>

          <main className="page-content">
            <section className="section-block contact-section" id="contact">
              <div className="section-heading">
                <p className="eyebrow">יצירת קשר</p>
                <h2>בוחרים את הערוץ שנוח לכם</h2>
              </div>

              <div className="contact-grid">
                {contactMethods.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    className="contact-card"
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    <span className="contact-icon-wrap">
                      <Icon className="contact-icon" aria-hidden="true" />
                    </span>
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </section>

            <section className="section-block" id="properties">
              <div className="section-heading">
                <p className="eyebrow">נמכרו בהצלחה</p>
                <h2>נכסים שנמכרו</h2>
              </div>

              <div className="property-list" key={activePropertyGroupIndex}>
                {visibleProperties.map((property) => (
                  <a
                    className="property-card property-card-rotating property-card-link"
                    key={property.slotKey}
                    href="#cta"
                  >
                    <img
                      src={property.image}
                      alt={property.title}
                      className="property-image"
                      loading="lazy"
                    />
                    <div className="property-content">
                      <p className="property-status">נכס שנמכר</p>
                      <h3>{property.title}</h3>
                      <p className="property-mini-meta">
                        <MapPin size={16} aria-hidden="true" />
                        <span>{property.location}</span>
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            <section className="section-block about-section" id="about">
              <div className="section-heading">
                <p className="eyebrow">אודות</p>
                <h2>קצת עליי</h2>
              </div>

              <p className="about-text">
                אני מלווה לקוחות בתהליך קנייה, מכירה והשקעה בנדל״ן עם דגש על שקיפות,
                זמינות מלאה ותוצאה מדויקת לצרכים שלכם. המטרה שלי היא להפוך את התהליך
                לפשוט, בטוח ומשתלם יותר — מהשיחה הראשונה ועד חתימת העסקה.
              </p>

              <div className="highlight-grid">
                {highlights.map((item) => (
                  <div className="highlight-card" key={item}>
                    <BadgeCheck size={18} aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="section-block" id="services">
              <div className="section-heading">
                <p className="eyebrow">שירותים</p>
                <h2>השירותים שלי</h2>
              </div>

              <div className="services-grid">
                {services.map(({ label, icon: Icon }) => (
                  <article className="service-card" key={label}>
                    <span className="service-icon-wrap">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <h3>{label}</h3>
                  </article>
                ))}
              </div>
            </section>

            <section className="section-block reviews-section" id="reviews">
              <div className="section-heading">
                <p className="eyebrow">המלצות</p>
                <h2>לקוחות ממליצים</h2>
              </div>

              <div className="reviews-showcase">
                <div className="reviews-grid" key={activeReviewIndex}>
                  {visibleReviews.map((review) => (
                    <article className="review-card review-card-rotating" key={review.slotKey}>
                      <div className="review-card-topline">
                        <div>
                          <p className="review-kicker">לקוחות אמיתיים. תוצאות אמיתיות.</p>
                          <strong className="review-name">{review.name}</strong>
                        </div>
                        <div className="review-rating-block">
                          <ReviewStars
                            rating={review.rating}
                            label={`דירוג ${review.rating} מתוך 5 עבור ${review.name}`}
                          />
                          <span className="review-rating-value">{review.rating.toFixed(1)}/5</span>
                        </div>
                      </div>

                      <p className="review-text">{review.review}</p>
                    </article>
                  ))}
                </div>

                <div className="review-controls" aria-label="בחירת ביקורת">
                  {reviews.map((review, index) => (
                    <button
                      key={review.name}
                      type="button"
                      className={`review-dot ${index === activeReviewIndex ? 'is-active' : ''}`}
                      aria-label={`הצגת ביקורת של ${review.name}`}
                      aria-pressed={index === activeReviewIndex}
                      onClick={() => setActiveReviewIndex(index)}
                    ></button>
                  ))}
                </div>
              </div>
            </section>

            <section className="section-block cta-section" id="cta">
              <p className="eyebrow">השארת פרטים</p>
              <h2>לניתוח שווי הנכס בחינם - השאירו פרטים ליצירת קשר</h2>
              <p className="cta-text">
                מלאו את הפרטים ושלחו, והפנייה תישלח ישירות למייל של ליאור ספיר.
              </p>

              <form className="lead-form" onSubmit={handleLeadSubmit}>
                <label className="lead-field">
                  <span>שם מלא</span>
                  <input
                    type="text"
                    name="fullName"
                    value={leadForm.fullName}
                    onChange={handleLeadFieldChange}
                    placeholder="השם המלא שלכם"
                    required
                  />
                </label>

                <label className="lead-field">
                  <span>אימייל</span>
                  <input
                    type="email"
                    name="email"
                    value={leadForm.email}
                    onChange={handleLeadFieldChange}
                    placeholder="name@example.com"
                    required
                  />
                </label>

                <label className="lead-field">
                  <span>מספר טלפון</span>
                  <input
                    type="tel"
                    name="phone"
                    value={leadForm.phone}
                    onChange={handleLeadFieldChange}
                    placeholder="050-000-0000"
                    required
                  />
                </label>

                <div className="cta-actions">
                  <button
                    className="primary-button lead-submit"
                    type="submit"
                    disabled={leadSubmitState.status === 'submitting'}
                  >
                    {leadSubmitState.status === 'submitting' ? 'שולח...' : 'שליחה במייל'}
                  </button>
                  <a className="secondary-button" href={contactLinks.phone}>
                    חיוג עכשיו
                  </a>
                </div>

                {leadSubmitState.message ? (
                  <p className={`lead-submit-message is-${leadSubmitState.status}`}>
                    {leadSubmitState.message}
                  </p>
                ) : null}
              </form>
            </section>

            <footer className="page-footer">© כל הזכויות שמורות | {agentName}</footer>
          </main>

          <nav className="bottom-nav" aria-label="ניווט מהיר">
            {navItems.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} className="bottom-nav-link">
                <Icon size={17} aria-hidden="true" />
                <span>{label}</span>
              </a>
            ))}
          </nav>
      </div>
    </div>
  )
}

export default App
