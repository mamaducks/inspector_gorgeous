import Plug from "../ServiceImg/plugSVG.svg";
import Attic from "../ServiceImg/atticSVG.svg";
import Basement from "../ServiceImg/basementSVG.svg";
import Drainage from "../ServiceImg/drainageSVG.svg";
import Gutter from "../ServiceImg/gutterSVG.svg";
import HeatCool from "../ServiceImg/heatcoolSVG.svg";
import Plumb from "../ServiceImg/plumbSVG.svg";
import Roof from "../ServiceImg/roofSVG.svg";
import Wall from "../ServiceImg/wallImg.svg";
import Wind from "../ServiceImg/winDoorSVG.svg";

export const servicesCard = [
  {
    image: Plug,
    textFront: "Electrical Panels & Breakers",
    textBack: "The condition of readily accessible service panel components, note the presence of GFCIs, AFCIs, smoke alarms and check the operation of representative outlets, switches, fixtures and other devices. ",
  },
  {
    image: Wall,
    textFront: "Walls, Ceilings, & Floors",
    textBack: <span>Your inspector will check for leaning, cracked, or bowed walls, peeling or pitted paint, as well as look for signs of leakage or sagging all of which may be signs of defects in the foundation or underlying structure of the home. <br />Examine ceilings for cracks that may indicate structural problems as well as look for any signs that moisture is getting into the ceiling from the attic or rooms above. <br/> We will also examine the floors. Sloping, uneven floors may mean the structure underneath is damaged due to ground settling, moisture, or termites.</span>,
  },
  {
    image: Wind,
    textFront: "Windows and Doors",
    textBack: "The inspector will assess visible siding, trim, windows, and doors for proper construction and function looking for signs of leakage and damage, sagging, missing components, air gaps, or other structural concerns. Windows will be operated to determine function.",
  },
  {
    image: Basement,
    textFront: "Basement & Foundation",
    textBack: <span>Basements are often a source of excess moisture and leaks, especially in unfinished basements.<br/> Visible load-bearing framing components, foundation walls, slabs, piers and columns will be assessed for function and presence of damage, decay or defects, past flooding and water damage, and moisture due to poor ventilation or insulation water penetration at below grade areas</span>,
  },
  {
    image: Drainage,
    textFront: "Grading & Drainage",
    textBack: "Ideally your land should slope away from the foundation of your home. A failure in any of the elements of your homes drainage system can lead to major structural damage. Faulty gutters or grading that doesn’t have the appropriate fall away from the structure will lead to water pooling around the foundation which could lead to foundation damage in the long-term.",
  },
  {
    image: Roof,
    textFront: "Roof, Flashings, & Trim",
    textBack: 
    " We assess the condition of visible roof covering materials, (shingles), flashings at roof penetrations and valleys, skylights, and chimneys looking for evidence of leakage or worn, damaged, or missing components. We also utilize drone technology when unable to safely access the roof to provide a full evaluation.",
  },
  {
    image: Gutter,
    textFront: "Gutters & Downspouts",
    textBack: "A no-good gutter can mean anything from one that just needs a bit of cleaning to one that is completely structurally unsound. Without a proper gutter water carelessly rolls off the roof and can easily make its way under the shingles or into the siding. The longer it sits there the more damage it will do and in the long-term it can cause some major issues.",
  },
  {
    image: HeatCool,
    textFront: "Heating & Cooling",
    textBack: " The function and condition of visible components of the central AC or heat pump system including condensers and air handlers, and the distribution ductwork will be assessed. Your inspector will look for air gaps at openings near electrical wiring, HVAC system connections, as well as other places. Identifying and closing these gaps will help make your home more energy efficient ",
  },
  {
    image: Plumb,
    textFront: "Interior Plumbing System",
    textBack: <span>We inspect visible water supply piping, distribution piping, waste system piping, and water heaters. We check plumbing fixtures and built-in appliances looking for water pressure or drainage issues and visible signs of leaks.<br/> Also includes inspection of the physical condition and operation of piping to asses flow, drainage and leakage.</span>,
  },
  {
    image: Attic,
    textFront: "Attic & Visible Insulation",
    textBack: " A number of structural issues are discovered in the attic and crawl spaces. Damaged (cracked or loose) roof rafters, floor joists and leaking foundations and the condition of insulation or inadequate ventilation are revealed when these spaces are inspected. The condition of insulation or inadequate ventilation can be noted inspecting these spaces.",
  },
];
