<section id="testimonials" class="about-section">
	<div class="body-container">
		<h2>
			what do our clients & partners say?
		</h2>
		<div class="spacer-line"></div>

		<div class="testimonials-holder">
			<?php for ($i=0; $i<7; $i++) { ?>
			<div class="testimonial-item" data-testimonialId="<?= $i ?>">
				<h3>
					"Design Group 3 Architects have used the services of many recruitment consultants to assist in the expansion of our practice. We have found Hunter Dunning to be responsive to our recruitment needs and always willing to work hard on our behalf. They seem to have access to a wide range of high caliber candidates who are all well briefed as to our business aims.”
				</h3>
				<span class="testimonial-name">
					NICK BAKER (GROUP DESIGN DIRECTOR)
				</span>
			</div>
			<?php } ?>
		</div>
		<ul class="testimonial-nav">
			<?php for ($i=0; $i<7; $i++) { ?>
			<li id="<?= $i ?>" class="<?= ($i == 0 ? 'active' : '') ?>"></li>
			<?php } ?>
		</ul>
	</div>
	<div class="max-container">
		<div class="testimonial-nav-arrows">
			<div class="arrow left prev-testimonial"></div>
			<div class="arrow right next-testimonial"></div>
		</div>
	</div>
</section>