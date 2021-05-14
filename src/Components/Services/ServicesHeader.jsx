import { Box, Container } from "@material-ui/core";
import React from "react";

export function ServicesHeader() {
  return (
    <>
      <Container style={{ padding: 20 }}>
        <Box direction="column">
          <Box
            fontFamily="Helvetica"
            fontSize={14}
            letterSpacing={2}
            lineHeight={1.8}
            textAlign="center"
            color="#095565"
          >
            A home inspection is only as good as the inspector. That’s why IG
            Inspections LLC is your best choice for home inspections in New
            Jersey. With over 30 years experience restoring, building, and
            designing homes, whether you’re a homeowner, homebuyer, or agent
            we’ll provide you with a detailed description of a home’s condition
            so you can move forward confidently and with peace of mind.
          </Box>

          <Box>
            <Box>
              Count on WIN Home Inspection to provide you with the best home
              inspection service and an unbiased, comprehensive report on the
              condition of the property. Our home inspectors are always
              reliable, professional, and knowledgeable.{" "}
            </Box>
            <Box
              fontFamily="Helvetica"
              fontSize={14}
              letterSpacing={2}
              lineHeight={2.3}
              textAlign="center"
              color="#751f66"
            >
              Some issues are easily identified and others need a more in-depth
              and educated analysis. This is where I can help you. I will
              inspect all of the systems within your home – from roof to
              basement – to ensure that everything is in proper working order. I
              encourage you to attend, and accompany me during the inspection.
              <div>
                Feel free to ask questions as we inspect the premises together.
                I will give you a full explanation, in non-technical terms, to
                provide you with a better understanding of the systems within
                your home. You can then consider what needs to be addressed and
                budgeted for immediate attention or what can be put it on the
                to-do list.
              </div>
             
            </Box>
          </Box>
          <Box>
            <Box>
              INSPECTION A comprehensive WIN Home Inspection Report is prepared
              by a highly trained WIN home inspector, delivered within 24 hours
              (next business day) – often the same day.{" "}
            </Box>
            <Box>
              TOWNHOME, MANUFACTURED HOME, DUPLEX, MULTIPLEX INSPECTION There
              are many aspects of condominiums, townhomes, manufactured and
              mobile homes, duplexes and multiplexes that differ from a
              permanent residence. Similar to a full home inspection, the home
              inspector reviews all visual aspects of all major systems specific
              to these types of homes.
            </Box>
            <Box>
              PRE-LISTING INSPECTION A WIN pre-listing home inspection provides
              you with comprehensive information on the current condition of
              your home and includes recommendations for property repairs and
              enhancements to improve the home’s value and marketability.
            </Box>
            <Box>
              PRE-OFFER INSPECTION More common in competitive real estate
              markets with multiple offers, this preliminary, information-only
              home inspection evaluates a home’s major systems and any potential
              issues, giving home buyers the information to make an informed
              decision on whether to place an offer on a property.
            </Box>{" "}
            <Box>
              NEW CONSTRUCTION INSPECTION Buying a newly constructed home gives
              you the opportunity to pick the colors, finishes, and other
              details that truly make a house your own. But how can you be sure
              that the quality of your new home isn’t only skin deep? New
              construction inspections from WIN monitor the home building
              process at critical building stages to verify that the
              construction is sound and provides you with the information you
              need to make informed decisions about your new home.
            </Box>
            <Box>
              LIGHT COMMERCIAL INSPECTION Commercial property inspections are a
              growing portion of the inspection industry. Evaluation of a
              commercial property has many of the same attributes as a
              residential home inspection. Our qualified inspectors will
              evaluate the property under the guidance of the nationally
              accepted Standards of Practice for Commercial Buildings.
            </Box>
            <Box>
              WOOD DESTROYING ORGANISMS / INSECTS (WDO/WDI) INSPECTION WIN's
              wood destroying organism/insect inspection can be performed at the
              same time as one of our other inspections, or on its own, so
              you'll know if termites, ants, dry rot, or another type of
              destructive organism has worked its way into your house, and your
              home inspector will provide you with advice on how to handle the
              problem.
            </Box>
            Ancillary Services{" "}
            <Box>
              RADON TESTING WIN Home Inspection provides radon testing so you
              will have peace of mind regarding the safety of your home.
            </Box>
            <Box>
              {" "}
              IR THERMOGRAPHY An Infrared (IR) thermal scan can help find
              anomalies that may otherwise remain hidden in walls, floors and
              ceilings.
            </Box>
          </Box>

          <Box
            fontFamily="Helvetica"
            fontSize={14}
            letterSpacing={2}
            lineHeight={1.8}
            textAlign="center"
            color="#095565"
            style={{ paddingTop: 20 }}
          >
            FULL SERVICE INSPECTIONS include:
          </Box>
        </Box>
      </Container>
    </>
  );
}
