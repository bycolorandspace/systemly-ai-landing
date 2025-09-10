type Testimonial = {
  description: string;
  name: string;
  title: string;
};

type Plan = {
  name: string;
  description?: string;
  price: {
    billedMonthly: string;
    billedAnnually: string;
  };
  features: string[];
  link: string;
};

export type { Testimonial, Plan };
