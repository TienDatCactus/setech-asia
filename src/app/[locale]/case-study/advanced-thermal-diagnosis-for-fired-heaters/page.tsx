"use client";

import React from "react";
const Page: React.FC = () => {
  // const pathname = usePathname();
  // const segment = pathname?.split("/")[3];
  return (
    <div>
      <div className="">
        <h2 className="text-2xl font-bold">By SETECH SERVICE CO., LTD</h2>
        <blockquote className="italic my-4 bg-[#f5f5f5] p-4  border-l-4 border-[#071afd] text-lg">
          Ensuring industrial plants stay operational, safe, and efficient — one
          fired heater at a time.
        </blockquote>
        <hr className="my-4 text-[#ccc]" />
        <section>
          <article>
            <h3 className="text-4xl font-bold my-4 flex items-center gap-2">
              Uncovering the Invisible: Advanced Thermal Diagnosis for Fired
              Heaters
            </h3>
            <div className="[&>span]:block [&>span]:my-2 [&:nth-child(2)]:mt-0">
              <span>
                In the complex architecture of industrial infrastructure, fired
                heaters — also known as process furnaces — serve as critical
                assets in a wide array of sectors including refining,
                petrochemicals, oil and gas, power generation, and fertilizer
                production. These systems, often operating continuously under
                extreme conditions, play a pivotal role in heat transfer
                processes that drive chemical reactions and product yields. A
                single fault within these units can precipitate costly shutdowns
                or pose significant safety risks.
              </span>
              <span>
                To address this challenge, Setechsasia, an industrial solutions
                provider based in Southeast Asia, has developed a specialized
                approach to the inspection and maintenance of fired heaters:{" "}
                <b>Advanced Thermal Diagnosis using Infrared Thermography</b>.
              </span>
            </div>
          </article>
          <hr className="my-4 text-[#ccc]" />
          <article>
            <h3 className="text-4xl font-bold my-4 flex items-center gap-2">
              The Diagnostic Frontier
            </h3>
            <div className="[&>span]:block [&>span]:my-2 [&:nth-child(2)]:mt-0">
              <span>
                Infrared thermography — a method once reserved for military
                applications and high-tech laboratories — has become a
                cornerstone of predictive maintenance in modern industrial
                settings. Applied correctly, it allows engineers to visualize
                temperature gradients across surfaces and internal components in
                real time. For fired heaters, thermographic surveys can reveal a
                host of anomalies that are otherwise undetectable through
                conventional inspection methods.
              </span>
              <span>
                SETECH’s approach integrates high-resolution thermal imaging
                with decades of domain expertise. The result is not just a
                visual scan but a diagnostic report with actionable insights,
                capable of guiding operational decisions and long-term asset
                strategies.
              </span>
            </div>
            <blockquote className="italic my-4 bg-[#f5f5f5] p-2  border-l-4 border-[#071afd] text-sm">
              Suggested image: Thermal image showing heat distribution across
              fired heater tubes.
            </blockquote>
          </article>
          <hr className="my-4 text-[#ccc]" />
          <article>
            <h3 className="text-4xl font-bold my-4 flex items-center gap-2">
              Risks, Costs, and Hidden Failures
            </h3>
            <div className="[&>span]:block [&>span]:my-2 [&:nth-child(2)]:mt-0">
              <span>
                Fired heaters, by design, are prone to degradation. Over time,
                they accumulate fouling, develop internal coking, or suffer from
                flame misalignment. In some cases, thermocouples malfunction or
                support components inside the firebox — such as hangers or tube
                guides — fail under stress.
              </span>
              <span>
                The costs associated with these failures are multifaceted: loss
                of production, energy inefficiencies, premature equipment wear,
                and—most critically—compromised safety. Thermal diagnosis aims
                to identify these issues before they manifest in operational or
                safety incidents.
              </span>
              <span>
                <label htmlFor="thermo" className="font-bold">
                  Among the common conditions detected through thermography are:
                </label>
                <ul id="thermo" className="list-disc pl-6 mt-2 space-y-1">
                  <li>Internal coking and external fouling</li>
                  <li>Burner flame impingement or imbalance</li>
                  <li>Malfunctioning temperature sensors</li>
                  <li>Leaks of tramp air or snuffing steam</li>
                  <li>Localized overheating or dry zones in tubes</li>
                  <li>Structural failures such as broken tube supports</li>
                </ul>
              </span>
            </div>
            <blockquote className="italic my-4 bg-[#f5f5f5] p-2  border-l-4 border-[#071afd] text-sm">
              Suggested image: Chart showing temperature anomalies detected in a
              survey with corresponding failure modes.
            </blockquote>
          </article>
          <hr className="my-4 text-[#ccc]" />
          <article>
            <h3 className="text-4xl font-bold my-4 flex items-center gap-2">
              Conclusion: Toward Predictive Intelligence
            </h3>
            <div className="[&>span]:block [&>span]:my-2 [&:nth-child(2)]:mt-0">
              <span>
                As industrial operations become more digitized and data-driven,
                thermal diagnosis occupies a critical intersection between
                engineering expertise and real-time sensing technology. It
                offers a means not only to inspect but to understand — and
                eventually to predict — the behavior of critical assets under
                real operating conditions.
              </span>
              <span>
                SETECH&apos;s work in this field demonstrates how a deep
                specialization, paired with methodical execution, can transform
                what was once considered a reactive maintenance task into a
                strategic operational tool.
              </span>
            </div>
            <blockquote className="italic my-4 bg-[#f5f5f5] p-2  border-l-4 border-[#071afd] text-sm">
              Suggested image: Diagram or schematic showing how thermographic
              findings integrate into plant maintenance systems.
            </blockquote>
          </article>
          <footer className="text-sm text-gray-500 mt-4">
            <p>
              <sup className="text-xs align-super">1</sup> For organizations
              operating fired heaters—particularly in high-throughput, high-risk
              industries—the adoption of advanced thermal diagnostics may no
              longer be optional. In an environment where efficiency, safety,
              and continuity are paramount, the ability to see the invisible may
              prove indispensable.
            </p>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default Page;
