import { describe, it, expect } from "vitest";
import { riskScore, simulate, sampleSuppliers, summary } from "./supply-data";
const supplier = {id: "test", name: "Test", country: "India", category: "Electronics", cost: 10000, active: true};
describe("supply chain rules", () => {
  it("bounds supplier risk from 0 to 100", () => {
    expect(
      riskScore({
        ...supplier,
        delivery: 100,
        quality: 100,
        reliability: 100,
        disruptions: 0,
      }),
    ).toBe(0);
    expect(
      riskScore({
        ...supplier,
        delivery: 0,
        quality: 0,
        reliability: 0,
        disruptions: 20,
      }),
    ).toBe(100);
  });
  it("calculates a 20% transportation cost increase against a 30% transport share", () => {
    expect(simulate(100000, 20, 0, 0).cost).toBe(106000);
  });
  it("calculates 30% demand growth", () => {
    expect(simulate(100000, 0, 30, 0).cost).toBe(130000);
  });
  it("calculates 10 days additional safety stock for 10 days delay", () => {
    expect(simulate(100000, 0, 0, 10).extraStock).toBe(10);
  });
  it("aggregates suppliers instead of fixed KPIs", () => {
    expect(summary(sampleSuppliers.slice(0, 2)).total).toBe(2);
  });
});
