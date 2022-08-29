import classes from './JuicesSummary.module.css'

export default function JuicesSummary() {
  return (
    <section className={classes.summary}>

      <div className={classes['left-div']}>
        <div>
        <h2>SUSTAINABLE JUICE PRODUCTION &amp; BOTANICAL NUTRITION</h2>
        </div>

        <div>
        <h3>Daily Rituals for Conscious Living</h3>
        </div>
      </div>

      <div className={classes['right-div']}>
        <p>a cold-pressed organic juice company, helping people achieve happier, healthier and wealthier lives. We are dedicated to using fresh and organic ingredients so that we can offer the highest quality of food and juice available.</p>
      </div>

    </section>
  )
}