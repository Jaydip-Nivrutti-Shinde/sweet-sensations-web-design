import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { ShoppingBag, Calendar } from "lucide-react";

const Order = () => {
  const [deliveryMethod, setDeliveryMethod] = useState("pickup");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Order placed successfully! We'll contact you shortly to confirm.");
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl font-bold mb-6 animate-fade-in">
            Order Online
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in">
            Place your order and we'll prepare it fresh for you
          </p>
        </div>
      </section>

      {/* Order Form */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="gradient-card p-8 md:p-12 rounded-2xl shadow-soft">
            {/* Personal Information */}
            <div className="mb-8">
              <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
                <ShoppingBag className="h-6 w-6 text-primary" />
                Your Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" name="name" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" name="phone" type="tel" required className="mt-2" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" name="email" type="email" required className="mt-2" />
                </div>
              </div>
            </div>

            {/* Product Selection */}
            <div className="mb-8">
              <h2 className="font-display text-2xl font-bold mb-6">What Would You Like?</h2>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="category">Product Category *</Label>
                  <Select name="category" required>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent className="bg-card">
                      <SelectItem value="cakes">Cakes</SelectItem>
                      <SelectItem value="pastries">Pastries</SelectItem>
                      <SelectItem value="breads">Breads</SelectItem>
                      <SelectItem value="cookies">Cookies</SelectItem>
                      <SelectItem value="snacks">Snacks</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="customization">Special Requests / Customization</Label>
                  <Textarea
                    id="customization"
                    name="customization"
                    placeholder="Tell us about any customizations, allergies, or special requests..."
                    className="mt-2 min-h-32"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Method */}
            <div className="mb-8">
              <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                Delivery or Pickup?
              </h2>
              <RadioGroup
                value={deliveryMethod}
                onValueChange={setDeliveryMethod}
                className="mb-6"
              >
                <div className="flex items-center space-x-2 p-4 rounded-lg border hover:border-primary transition-smooth cursor-pointer">
                  <RadioGroupItem value="pickup" id="pickup" />
                  <Label htmlFor="pickup" className="cursor-pointer flex-1">
                    Store Pickup (Free)
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 rounded-lg border hover:border-primary transition-smooth cursor-pointer">
                  <RadioGroupItem value="delivery" id="delivery" />
                  <Label htmlFor="delivery" className="cursor-pointer flex-1">
                    Home Delivery ($5.99)
                  </Label>
                </div>
              </RadioGroup>

              {deliveryMethod === "delivery" && (
                <div className="animate-fade-in">
                  <Label htmlFor="address">Delivery Address *</Label>
                  <Textarea
                    id="address"
                    name="address"
                    required
                    placeholder="Enter your full address"
                    className="mt-2"
                  />
                </div>
              )}

              <div className="mt-6">
                <Label htmlFor="date">Preferred Date *</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  required
                  className="mt-2"
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button type="submit" size="lg" className="w-full">
              Place Order
            </Button>
            <p className="text-sm text-muted-foreground text-center mt-4">
              We'll contact you to confirm your order and arrange payment
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Order;
