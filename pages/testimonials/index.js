import TestimonialSlider from "../../components/TestimonialSlider";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container h-full mx-auto flex flex-col justify-center">
        <h2 className="h2 xl:mb-0">
          Whats Client <span className="text-accent">Say.</span>
        </h2>
        {/* Slider */}
        <div>
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
