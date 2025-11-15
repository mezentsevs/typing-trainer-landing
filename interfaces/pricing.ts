export interface PricingPlan {
    id: number;
    name: string;
    price: string;
    originalPrice?: string;
    description: string;
    features: string[];
    ctaText: string;
    ctaHref: string;
    popular?: boolean;
    accentColor: string;
    billingPeriod: string;
}
