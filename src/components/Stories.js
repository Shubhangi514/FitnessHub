import React from 'react'
import john from './asset/assets/JOHN.png';
import arjun from './asset/assets/ARJUN.png';
import wow from './asset/assets/wow.png';
import logo from './asset/assets/logo.png';
import amir from './asset/assets/Amir.png';
import shenaaz from './asset/assets/shenaaz.png';
import w from './asset/assets/w.jpg';

function Stories() {
  return (
<>
<header style={{backgroundImage:`url('${w}')`}} class="header story">
      <div class="left">
        <img src={logo} alt="" />
      </div>
      <div class="right">
        <h2>True Heros transformation</h2>
      </div>
      <div class="mid">
        <h1>Ours story</h1>
      </div>
      <div class="container">
        <div class="gallery">
          <img src={shenaaz} alt="" />
          <div class="desc">
            <h3 class="head">Shehnaaz Gill</h3>
            surprised everyone with her transformation. Shahnaz had reduced12 kg
            in just 6 months.Shehnaaz Gill did not eat chocolate, ice cream,
            junk and processed food at all during her weight loss journey. Apart
            from this, she gave up on non-veg food. According to Shahnaz, she
            stopped eating outside food, due to which it became easy for her to
            lose those kilos.
          </div>
        </div>
        <div class="gallery">
          <img src={amir} alt="" />
          <div class="desc">
            <h3 class="head">Aamir Khan</h3>
            Fitness Regime & Diet: From Eating 1500 Calories To Working Out For
            7-8 Hours In A Day,Here's How Mr Perfectionist Gained Muscle For
            Dangal He weighed at that time 97 kgs with 37 per cent body fat. In
            just four months, he reduced body fat to 18.15 per cent. And the
            training continued till he reached 9.6 per cent body fat.
          </div>
        </div>
        <div class="gallery">
          <img src={wow} alt="" />
          <div class="desc">
            <h3 class="head">Body Transformation</h3>
            is the process of becoming aware of, working on and implementing
            changes to your mindset and habits regarding resistance training,
            fitness, nutrition and daily routines based on your personal goals
            and values.
          </div>
        </div>
        <div class="gallery">
          <img src={arjun} alt="" />
          <div class="desc">
            <h3 class="head">Arjun Kapoor</h3>
            transformed himself entirely by following a strict exercise regime
            and diet plan. Have a look at his phenomenal weight loss journey.
            Any transformation needs immense motivation and hardwork, and the
            hunk Arjun Kapoor has proven it with his journey from fat to fit.
            Have a look at his inspirational journey
          </div>
        </div>

        <div class="gallery">
          <img src={john} alt="" />
          <div class="desc">
            Yes, I firmly believe that anyone can change and transform their
            bodies but the truth is it isn’t easy (like they say) “if it was
            everyone would do it” and everyone would look exactly how they want
            to.It takes a lot of hard work (change is never easy)
          </div>
        </div>
      </div>
    </header>
    <footer>
      “You can't have a physical transformation until you have a spiritual
      transformation.”
    </footer>
</>  )
}

export default Stories