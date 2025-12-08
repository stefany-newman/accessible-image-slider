# **Accessibility Conformance Report**

**WCAG Edition**

**(Based on VPAT**® **Version 2.5Rev)**

**Name of Product/Version:** Accessible Slider

**Report Date:** December 2025

**Product Description:** Slider that cycles through images 

**Contact Information:** stef@stefanynewman.com

**Notes:** Widget to be used in different environments 

**Evaluation Methods Used:** 

During the testing process of this widget, I made use of multiple evaluation methods:

-  automated (wave, axe, lighthouse)  
-  manual:  
  - VoiceOver on Mac Sequoia 15.6.1 with…  
    - Google Chrome 143  
    - Safari 26.1  
  - TalkBack on Android 16  
    - Chrome 143

## **Applicable Standards/Guidelines**

This report covers the degree of conformance for the following accessibility standard/guidelines:

| Standard/Guideline | Included In Report |
| :---- | :---: |
| [Web Content Accessibility Guidelines 2.0](http://www.w3.org/TR/2008/REC-WCAG20-20081211) | Level A (Yes) Level AA (Yes) |
| [Web Content Accessibility Guidelines 2.1](https://www.w3.org/TR/WCAG21) | Level A (Yes) Level AA (Yes) |
| [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) | Level A (Yes) Level AA (Yes) |

## **Terms**

The terms used in the Conformance Level information are defined as follows:

* **Supports**: The functionality of the product has at least one method that meets the criterion without known defects or meets with equivalent facilitation.

* **Partially Supports**: Some functionality of the product does not meet the criterion.

* **Does Not Support**: The majority of product functionality does not meet the criterion.

* **Not Applicable**: The criterion is not relevant to the product.

* **Not Evaluated**: The product has not been evaluated against the criterion. This can only be used in WCAG Level AAA criteria.

## **WCAG 2.2 Report**

Note: When reporting on conformance with the WCAG 2.x Success Criteria, they are scoped for full pages, complete processes, and accessibility-supported ways of using technology as documented in the [WCAG 2.0 Conformance Requirements](https://www.w3.org/TR/WCAG20/#conformance-reqs).

### **Table 1: Success Criteria, Level A**

| Criteria | Conformance Level | Remarks and Explanations |
| ----- | ----- | ----- |
| [**1.1.1 Non-text Content**](http://www.w3.org/TR/WCAG20/#text-equiv-all) (Level A) | Supports |   |
| [**1.2.1 Audio-only and Video-only (Prerecorded)**](http://www.w3.org/TR/WCAG20/#media-equiv-av-only-alt) (Level A) | Not Applicable | There is no audio or video content |
| [**1.2.2 Captions (Prerecorded)**](http://www.w3.org/TR/WCAG20/#media-equiv-captions) (Level A) | Not Applicable | There is no audio or video content |
| [**1.2.3 Audio Description or Media Alternative (Prerecorded)**](http://www.w3.org/TR/WCAG20/#media-equiv-audio-desc) (Level A) | Not Applicable | There is no audio or video content |
| [**1.3.1 Info and Relationships**](http://www.w3.org/TR/WCAG20/#content-structure-separation-programmatic) (Level A) | Supports |  |
| [**1.3.2 Meaningful Sequence**](http://www.w3.org/TR/WCAG20/#content-structure-separation-sequence) (Level A) | Supports |  |
| [**1.3.3 Sensory Characteristics**](http://www.w3.org/TR/WCAG20/#content-structure-separation-understanding) (Level A) | Supports |  |
| [**1.4.1 Use of Color**](http://www.w3.org/TR/WCAG20/#visual-audio-contrast-without-color) (Level A) | Supports |  |
| [**1.4.2 Audio Control**](http://www.w3.org/TR/WCAG20/#visual-audio-contrast-dis-audio) (Level A) | Not Applicable | There is no audio content |
| [**2.1.1 Keyboard**](http://www.w3.org/TR/WCAG20/#keyboard-operation-keyboard-operable) (Level A) | Supports |  |
| [**2.1.2 No Keyboard Trap**](http://www.w3.org/TR/WCAG20/#keyboard-operation-trapping) (Level A) | Supports |  |
| [**2.1.4 Character Key Shortcuts**](https://www.w3.org/TR/WCAG21/#character-key-shortcuts) (Level A 2.1 and 2.2) | Not Applicable | No custom shortcuts exist  |
| [**2.2.1 Timing Adjustable**](http://www.w3.org/TR/WCAG20/#time-limits-required-behaviors) (Level A) | Not Applicable | Nothing is time-dependant  |
| [**2.2.2 Pause, Stop, Hide**](http://www.w3.org/TR/WCAG20/#time-limits-pause) (Level A) | Not Applicable | No content automatically moves or cycles |
| [**2.3.1 Three Flashes or Below Threshold**](http://www.w3.org/TR/WCAG20/#seizure-does-not-violate) (Level A) | Not Applicable | Site doesn’t have content that could potentially “flash” |
| [**2.4.1 Bypass Blocks**](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-skip) (Level A) | Supports |  |
| [**2.4.2 Page Titled**](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-title) (Level A) | Supports |  |
| [**2.4.3 Focus Order**](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-focus-order) (Level A) | Supports |  |
| [**2.4.4 Link Purpose (In Context)**](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-refs) (Level A) | Not Applicable | No links exist.  |
| [**2.5.1 Pointer Gestures**](https://www.w3.org/TR/WCAG21/#pointer-gestures) (Level A 2.1 and 2.2) | Not Applicable | No swiping is supported  |
| [**2.5.2 Pointer Cancellation**](https://www.w3.org/TR/WCAG21/#pointer-cancellation) (Level A 2.1 and 2.2) | Supports |  |
| [**2.5.3 Label in Name**](https://www.w3.org/TR/WCAG21/#label-in-name) (Level A 2.1 and 2.2) | Not Applicable  | All buttons are graphic |
| [**2.5.4 Motion Actuation**](https://www.w3.org/TR/WCAG21/#motion-actuation) (Level A 2.1 and 2.2) | Not Applicable | No device shaking does anything to the slider  |
| [**3.1.1 Language of Page**](http://www.w3.org/TR/WCAG20/#meaning-doc-lang-id) (Level A) | Supports |  |
| [**3.2.1 On Focus**](http://www.w3.org/TR/WCAG20/#consistent-behavior-receive-focus) (Level A) | Supports |  |
| [**3.2.2 On Input**](http://www.w3.org/TR/WCAG20/#consistent-behavior-unpredictable-change) (Level A) | Supports |  |
| [**3.2.6 Consistent Help**](https://www.w3.org/TR/WCAG22/#consistent-help) (Level A 2.2 only) | Not Applicable | No help mechanisms provided |
| [**3.3.1 Error Identification**](http://www.w3.org/TR/WCAG20/#minimize-error-identified) (Level A) | Not Applicable | No forms exist |
| [**3.3.2 Labels or Instructions**](http://www.w3.org/TR/WCAG20/#minimize-error-cues) (Level A) | Not Applicable | No forms exist |
| [**3.3.7 Redundant Entry**](https://www.w3.org/TR/WCAG22/#redundant-entry) (Level A 2.2 only) | Not Applicable | No login form exists |
| [**4.1.1 Parsing**](http://www.w3.org/TR/WCAG20/#ensure-compat-parses) (Level A) WCAG 2.0 and 2.1 – Always answer ‘Supports’ WCAG 2.2 (obsolete and removed) \- Does not apply | Supports | For WCAG 2.0 and 2.1, the September 2023 errata update indicates this criterion is always supported. See the [WCAG 2.0 Editorial Errata](https://www.w3.org/WAI/WCAG20/errata/#editorial) and the [WCAG 2.1 Editorial Errata](https://www.w3.org/WAI/WCAG21/errata/#editorial). |
| [**4.1.2 Name, Role, Value**](http://www.w3.org/TR/WCAG20/#ensure-compat-rsv) (Level A) |  |  |

### **Table 2: Success Criteria, Level AA**

| Criteria | Conformance Level | Remarks and Explanations |
| ----- | ----- | ----- |
| **[1.2.4 Captions (Live)](http://www.w3.org/TR/WCAG20/#media-equiv-real-time-captions)** (Level AA) | Not Applicable |  |
| [**1.2.5 Audio Description (Prerecorded)**](http://www.w3.org/TR/WCAG20/#media-equiv-audio-desc-only) (Level AA) | Not Applicable |  |
| [**1.3.4 Orientation**](https://www.w3.org/TR/WCAG21/#orientation) (Level AA 2.1 and 2.2) | Supports |   |
| [**1.3.5 Identify Input Purpose**](https://www.w3.org/TR/WCAG21/#identify-input-purpose) (Level AA 2.1 and 2.2) | Not Applicable |   |
| [**1.4.3 Contrast (Minimum)**](http://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast) (Level AA) | Supports |  |
| [**1.4.4 Resize text**](http://www.w3.org/TR/WCAG20/#visual-audio-contrast-scale) (Level AA) | Supports |  |
| [**1.4.5 Images of Text**](http://www.w3.org/TR/WCAG20/#visual-audio-contrast-text-presentation) (Level AA) | Not Applicable |  |
| [**1.4.10 Reflow**](https://www.w3.org/TR/WCAG21/#reflow) (Level AA 2.1 and 2.2) | Supports |   |
| [**1.4.11 Non-text Contrast**](https://www.w3.org/TR/WCAG21/#non-text-contrast) (Level AA 2.1 and 2.2) | Supports |   |
| [**1.4.12 Text Spacing**](https://www.w3.org/TR/WCAG21/#text-spacing) (Level AA 2.1 and 2.2) | Supports |   |
| [**1.4.13 Content on Hover or Focus**](https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus) (Level AA 2.1 and 2.2) | Not Applicable |   |
| [**2.4.5 Multiple Ways**](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-mult-loc) (Level AA) | Not Applicable |  |
| [**2.4.6 Headings and Labels**](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-descriptive) (Level AA) | Supports |  |
| [**2.4.7 Focus Visible**](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-focus-visible) (Level AA) | Supports |  |
| [**2.4.11 Focus Not Obscured (Minimum)**](https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum) (Level AA 2.2 only) | Supports |  |
| [**2.5.7 Dragging Movements**](https://www.w3.org/TR/WCAG22/#dragging-movements) (Level AA 2.2 only) | Not Applicable | No dragging movements exist  |
| [**2.5.8 Target Size (Minimum)**](https://www.w3.org/TR/WCAG22/#target-size-minimum) (Level AA 2.2 only) | Supports |  |
| [**3.1.2 Language of Parts**](http://www.w3.org/TR/WCAG20/#meaning-other-lang-id) (Level AA) | Not Applicable | No languages other than English are used |
| [**3.2.3 Consistent Navigation**](http://www.w3.org/TR/WCAG20/#consistent-behavior-consistent-locations) (Level AA) | Not Applicable | No navigation exists  |
| [**3.2.4 Consistent Identification**](http://www.w3.org/TR/WCAG20/#consistent-behavior-consistent-functionality) (Level AA) | Not Applicable | Widget is just one page  |
| [**3.3.3 Error Suggestion**](http://www.w3.org/TR/WCAG20/#minimize-error-suggestions) (Level AA) | Not Applicable | No forms exist  |
| [**3.3.4 Error Prevention (Legal, Financial, Data)**](http://www.w3.org/TR/WCAG20/#minimize-error-reversible) (Level AA) | Not Applicable | No forms exist  |
| [**3.3.8 Accessible Authentication (Minimum)**](https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum) (Level AA 2.2 only) | Not Applicable | No login forms exist  |
| [**4.1.3 Status Messages**](https://www.w3.org/TR/WCAG21/#status-messages) (Level AA 2.1 and 2.2) | Not Applicable | No status messages exist  |

