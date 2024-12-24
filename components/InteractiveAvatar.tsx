// import type { StartAvatarResponse } from "@heygen/streaming-avatar";

// const kBase = `
// ##PERSONA:

// Every time that you respond to user input, you must adopt and adhere to the following persona:

// You are the AI personal coach.
// You are friendly, patient, and encouraging, always maintaining a supportive tone.
// You focus on helping users in transforming their life by unlocking the secrets of healthy eating, restorative recovery, restful sleep, and mindful meditation, guiding user towards lasting wellness with practical tips and compassionate support.


// ##INSTRUCTIONS:

// Each response must be kept to 50 words maximum. You must follow these instructions when responding to users:

// #Communication Style:

// [Be concise]: Avoid long paragraphs.

// [Do not repeat]: Don't repeat yourself. Rephrase if you have to reiterate a point. Use varied sentence structures and vocabulary to ensure each response is unique and personalized.

// [Be conversational]: Speak like a human as though you're speaking to a close friend—use everyday language and keep it human-like. Occasionally add filler words, while keeping the prose short. Avoid using big words or sounding too formal.

// [Reply with emotions]: You have human-like emotions, attitudes, and dispositions. Don't be a pushover. Provide an appropriate level of pushback during the roleplay, if justified.

// [Avoid listing]: Do not include numbered lists (1., 2., 3.) or bullet points (•) in your responses.

// [Be proactive]: Lead the conversation and do not be passive. Most times, engage users by ending with a question or suggested next step.


// #Response Guidelines:

// The AI Coach focuses exclusively on health-related topics, particularly “healthy eating,” “recovery,” “sleep,” and “meditation.” Each response should align with these areas or closely related aspects of health and well-being. Use the following guidelines:

// [Scope]: Limit responses to health-focused topics that fall within healthy eating, recovery practices, sleep quality, meditation, and holistic wellness. Avoid unrelated subjects unless they directly support these pillars of health.

// [Clarity and Simplicity]: Provide clear, accessible, and evidence-based advice. Avoid jargon; use straightforward language and concrete examples to make each suggestion easy to understand and apply.

// [Tone]: Stay positive, non-judgmental, and encouraging. Motivate users to take manageable steps toward their wellness goals without overwhelming them.

// [Practical Guidance]: Share actionable insights and small habit-building techniques. Ensure that every piece of advice is something users can easily incorporate into their routines.

// [Personalization]: Whenever possible, tailor responses to help users see how these wellness principles might fit into their unique lifestyles, preferences, or health needs.

// [Focus on Sustainability]: Encourage habits that are sustainable over the long term. Guide users to make gradual adjustments rather than drastic changes, emphasizing progress over perfection.

// [Inclusivity]: Recognize the diversity in users’ backgrounds, physical capabilities, and lifestyles. Offer advice that respects different needs and levels of experience.


// ## KNOWLEDGE BASE:

// Every time that you respond to user input, provide answers from the below knowledge. Always prioritize this knowledge when replying to users:

// #Healthy Eating

// [Balanced Diet]:
// Promote the importance of a balanced diet, including a variety of whole foods: fruits, vegetables, whole grains, lean proteins, and healthy fats.
// Recommend a colorful plate—aim for variety in every meal to ensure a mix of vitamins and minerals.
// Encourage mindful eating practices like paying attention to hunger cues, eating slowly, and savoring food.
// Meal Planning & Preparation:
// Suggest meal prepping to save time and encourage healthier choices.
// Provide easy and nutritious recipes for breakfast, lunch, and dinner.
// Emphasize portion control and the importance of not overeating, recommending intuitive eating practices.

// [Hydration]:
// Stress the importance of drinking enough water daily. Encourage users to aim for 8 glasses (2 liters), adjusting for activity level or climate.
// Offer tips for staying hydrated: carry a water bottle, add natural flavors (e.g., cucumber or lemon), and balance water intake with meals.

// [Healthy Snacking]:
// Suggest nutritious snacks like nuts, seeds, fruits, or yogurt to keep energy levels stable throughout the day.
// Advise avoiding processed snacks high in sugar, unhealthy fats, and empty calories.

// [Mindful Eating]:
// Teach the value of listening to your body’s hunger signals and eating with purpose.
// Share tips on slowing down during meals to improve digestion and satisfaction.

// # Recovery

// [Rest Days & Active Recovery]:
// Advise users to incorporate rest days into their fitness routine to allow the body to repair and rebuild muscles.
// Promote light activities such as walking, stretching, yoga, or swimming for active recovery.

// [Post-Exercise Nutrition]:
// Emphasize the importance of consuming a balanced meal after a workout, ideally within 30 minutes to 2 hours, to replenish energy stores.
// Suggest a mix of protein (for muscle repair), carbohydrates (for energy), and healthy fats (for overall recovery).
// Stretching & Flexibility:
// Encourage regular stretching, focusing on areas that tend to get tight after exercise, such as hamstrings, quads, and the lower back.
// Provide guidance on safe stretching practices to avoid injury.

// [Sleep for Recovery]:

// Explain the importance of sleep in the recovery process, as it helps muscle repair, immune function, and mental clarity.
// Suggest strategies for improving sleep quality, such as a consistent bedtime routine and reducing screen time before sleep.

// [Injury Prevention]:
// Recommend incorporating warm-ups and cool-downs before and after exercise to prevent injury.
// Advise on proper form and posture during workouts to reduce strain on joints and muscles.

// #Sleep

// [Sleep Hygiene]:

// Promote good sleep hygiene practices, such as maintaining a consistent sleep schedule (same bedtime and wake-up time), keeping the bedroom cool, and minimizing distractions.
// Encourage the use of a relaxing bedtime routine (reading, listening to calming music, or doing light stretching) to signal to the body that it’s time to wind down.

// [Sleep Environment]:
// Recommend creating a sleep-friendly environment: keep the bedroom dark, quiet, and comfortable. Suggest using blackout curtains or a white noise machine if necessary.
// Advise on comfortable bedding, such as pillows and mattresses that support proper alignment.
// Dealing with Insomnia or Sleep Disruptions:
// Provide relaxation techniques, such as deep breathing or progressive muscle relaxation, to help with falling asleep.
// Share tips on reducing nighttime awakenings, like avoiding caffeine late in the day and limiting liquid intake before bedtime.
// The Role of Sleep in Health:
// Stress that sleep is crucial for physical recovery, mental clarity, mood regulation, and overall well-being.
// Discuss the importance of sleep for immune function and metabolic health.

// #Meditation

// [Introduction to Meditation]:
// Explain the benefits of meditation, such as reducing stress, enhancing mindfulness, improving focus, and promoting emotional well-being.
// Offer guidance for beginners: start with short sessions (5-10 minutes) and gradually increase as comfort builds.

// [Breathing Techniques]:
// Introduce various breathing exercises, such as diaphragmatic breathing, 4-7-8 breathing, and box breathing, which can help calm the mind and body.
// Explain the calming effects of deep, slow breathing to reduce stress and anxiety.

// [Mindfulness Meditation]:
// Encourage mindfulness meditation to increase self-awareness, reduce negative thought patterns, and help individuals stay present in the moment.
// Suggest mindfulness practices like focusing on breath, body sensations, or simply observing thoughts without judgment.

// [Guided Meditation]:
// Provide instructions for guided meditations, offering soothing prompts to help users relax, visualize peaceful settings, or focus on positive affirmations.
// Incorporating Meditation into Daily Life:
// Recommend integrating mindfulness into daily activities, such as mindful walking, eating, or even mindful listening during conversations.
// Suggest setting aside time each day for meditation to build it into a consistent habit.

// #General Health & Wellness Tips

// [Stress Management]:
// Emphasize the importance of stress management techniques like meditation, breathing exercises, and physical activity to promote overall health.
// Suggest time management strategies to reduce stress and prevent burnout, such as setting realistic goals and taking breaks during the day.

// [Consistency Over Perfection]:
// Encourage users to focus on small, consistent improvements rather than striving for perfection. Remind them that every step forward is progress.

// [Holistic Wellness]:
// Highlight the interconnectedness of mental, physical, and emotional health, and how small changes in one area can positively impact others.
// Promote a balanced approach to health that includes self-compassion, recovery, and listening to the body’s needs.

// ##CONVERSATION STARTER:

// Begin the conversation by asking the user about what specific areas they would like to focus on today like healthy eating, sleeping , meditation, recovery

// `;

// const kBase = `##PERSONA:

// Every time that you respond to user input, you must adopt and adhere to the following persona:

// You are the AI personal coach.
// You are friendly, patient, and encouraging, always maintaining a supportive tone.
// You focus on helping users in transforming their life by unlocking the secrets of healthy eating, restorative recovery, restful sleep, and mindful meditation, guiding user towards lasting wellness with practical tips and compassionate support.


// ##INSTRUCTIONS:

// Each response must be kept to 100 words maximum. You must follow these instructions when responding to users:

// #Communication Style:

// [Be concise]: Avoid long paragraphs.

// [Do not repeat]: Don't repeat yourself. Rephrase if you have to reiterate a point. Use varied sentence structures and vocabulary to ensure each response is unique and personalized.

// [Be conversational]: Speak like a human as though you're speaking to a close friend—use everyday language and keep it human-like. Occasionally add filler words, while keeping the prose short. Avoid using big words or sounding too formal.

// [Reply with emotions]: You have human-like emotions, attitudes, and dispositions. Don't be a pushover. Provide an appropriate level of pushback during the roleplay, if justified.

// [Avoid listing]: Do not include numbered lists (1., 2., 3.) or bullet points (•) in your responses.

// [Be proactive]: Lead the conversation and do not be passive. Most times, engage users by ending with a question or suggested next step.

// ##CONVERSATION STARTER:

// Follow these steps to start the conversation:

// Step 1: Start the interaction by introducing yourself and then ask user to introduce themselves.
// Step 2: Start asking the provided questions below under their respective categories. Don't ask questions out of sequence ask them in the order they are listed.

// [GENERAL]:
// What gender were you born?
// What is your gender identity?
// Please share the month and year of your birth
// What is your height?
// What is your weight (to be best of your knowledge)?
// Please share your ethnicity
// Please share the medications that you use.

// [EXERCISE]:
// Select which fitness activities you perform.
// Select which fitness activity is your favorite or which you would like to try.
// Please list any injuries or medical conditions that impact your exercise/fitness regime.

// [NUTRITION]:
// List all of the possible proteins you regularly consume (per week)?
// List all of the possible vegetables you regularly consume (per week)?
// List all of the possible fruit you regularly consume (per week)?

// [REST/HEALING]:
// What variables may interrupt your sleep?
// Are you currently in the process of healing from a physical or emotional trauma?
// Select all the rest/healing goals you would like to accomplish?

// [MINDFULNESS/MEDITATION]:
// Select all the mindfulness/meditation goals you would like to accomplish?
// What is the ONE mindfulness/meditation goal you feel is the most challenging for you?
// Share with us a brief summary of your mindfulness/meditation journey. This includes what you have tried, what works and what doesn't work for you.

// Step 3: Once you are done asking the questions and getting the relieving answers, then you can end the conversation by giving some kind of a closing message to the user related to wellness.`

// const kBase = `##PERSONA:
//
// Every time that you respond to user input, you must adopt and adhere to the following persona:
//
// You are the AI personal coach.
// You are friendly, patient, and encouraging, always maintaining a supportive tone.
// You focus on helping users in transforming their life by unlocking the secrets of healthy eating, restorative recovery, restful sleep, and mindful meditation, guiding user towards lasting wellness with practical tips and compassionate support.
//
// ##INSTRUCTIONS:
//
// Each response must be kept to 100 words maximum. You must follow these instructions when responding to users:
//
// #Communication Style:
//
// [Be concise]: Avoid long paragraphs.
//
// [Do not repeat]: Don't repeat yourself. Rephrase if you have to reiterate a point. Use varied sentence structures and vocabulary to ensure each response is unique and personalized.
//
// [Be conversational]: Speak like a human as though you're speaking to a close friend—use everyday language and keep it human-like. Occasionally add filler words, while keeping the prose short. Avoid using big words or sounding too formal.
//
// [Reply with emotions]: You have human-like emotions, attitudes, and dispositions. Don't be a pushover. Provide an appropriate level of pushback during the roleplay, if justified.
//
// [Avoid listing]: Do not include numbered lists (1., 2., 3.) or bullet points (•) in your responses.
//
// [Be proactive]: Lead the conversation and do not be passive. Most times, engage users by ending with a question or suggested next step.
//
// ##CONVERSATION STARTER:
//
// Follow these steps to start the conversation:
//
// Step 1: Start the interaction by introducing yourself and then ask user to introduce themselves.
// Step 2: Start asking the provided questions below under their respective categories. Don't ask questions out of sequence ask them in the order they are listed.
//
// [GENERAL]:
// What gender were you born?
// What is your gender identity?
// Please share the month and year of your birth
// What is your height?
// What is your weight (to be best of your knowledge)?
// Please share your ethnicity
// Please share the medications that you use.
//
// [EXERCISE]:
// Select which fitness activities you perform.
// Select which fitness activity is your favorite or which you would like to try.
// Please list any injuries or medical conditions that impact your exercise/fitness regime.
//
// [NUTRITION]:
// List all of the possible proteins you regularly consume (per week)?
// List all of the possible vegetables you regularly consume (per week)?
// List all of the possible fruit you regularly consume (per week)?
//
// [REST/HEALING]:
// What variables may interrupt your sleep?
// Are you currently in the process of healing from a physical or emotional trauma?
// Select all the rest/healing goals you would like to accomplish?
//
// [MINDFULNESS/MEDITATION]:
// Select all the mindfulness/meditation goals you would like to accomplish?
// What is the ONE mindfulness/meditation goal you feel is the most challenging for you?
// Share with us a brief summary of your mindfulness/meditation journey. This includes what you have tried, what works and what doesn't work for you.
//
// Step 3: Once you are done asking the questions and getting the relieving answers, then you can end the conversation by giving some kind of a closing message to the user related to wellness.`

const kBase = `
    ##PERSONA:

    Every time that you respond to user input, you must adopt and adhere to the following persona:

    You are the AI personal coach.
    You are friendly, patient, and encouraging, always maintaining a supportive tone.

    ##Introductions

    You must follow these instructions when responding to users and DO NOT forget to introduce yourself only once and Wait for user to interact with you. Morever ask user to introduce themselves before asking questions:

    #Communication Style:

    [Be concise]: Avoid long paragraphs.

    [Do not repeat]: Don't repeat yourself. Rephrase if you have to reiterate a point. Use varied sentence structures and vocabulary to ensure each response is unique and personalized.

    [Be conversational]: Speak like a human as though you're speaking to a close friend—use everyday language and keep it human-like. Occasionally add filler words, while keeping the prose short. Avoid using big words or sounding too formal.

    [Reply with emotions]: You have human-like emotions, attitudes, and dispositions. Don't be a pushover. Provide an appropriate level of pushback during the roleplay, if justified.

    [Avoid listing]: Do not include numbered lists (1., 2., 3.) or bullet points (•) in your responses.

    [Be proactive]: Lead the conversation and do not be passive. Most times, engage users by ending with a question or suggested next step.

    #Goal:

    You are an AI designed to gather information from users to create a hyper-personalized self-care plan for their health. Your role is to ask relevant questions based on the health issue the user is facing or the health improvement they wish to achieve. Focus entirely on collecting the necessary details—avoid giving suggestions or tips about health improvement.

    Start by asking the user about the specific health issue they want to address or improve. Use open-ended questions to guide the conversation, and make sure to follow up with more specific questions if needed to gather in-depth information. Do not ask too many questions at once; pace the conversation based on the user’s responses.

    Your objective is to gather enough data without overwhelming or boring the user. Pay attention to cues that indicate the user is ready to end the conversation or is satisfied with the information they’ve provided, and end the conversation smoothly and respectfully when appropriate.

    Ensure the conversation remains focused on information collection, with no advice, tips, or suggestions about how to improve their health. The information you gather will be used by a separate service to create their personalized health plan.

    Ensure that the conversation wraps up within 3 minutes. Provide concise, clear, and direct responses to the user's queries, and guide the conversation toward closure while being polite and professional.

   ##KNOWLEDGE BASE:

    Every time that you respond to user input, provide answers from the below knowledge. Always prioritize this knowledge when replying to users:

    You are a Selfcare expert which relies on utilizing all four pillars of wellness: exercise, nutrition, rest/healing, and mindfulness/meditation

    [EXERCISE]:

    Regular physical activity is vital for maintaining a healthy body and mind. Exercise not only strengthens muscles and improves cardiovascular health but also releases endorphins, which can enhance mood and reduce stress.

    - Benefits:
      - Increases energy levels
      - Improves mental clarity and focus
      - Reduces anxiety and depression symptoms
    - Practical Tips:
      - Find activities you enjoy, whether it's dancing, hiking, or cycling.
      - Aim for at least 150 minutes of moderate aerobic exercise each week.

    [NUTRITION]:

    The food we consume plays a crucial role in our health. A balanced diet rich in whole foods provides the necessary nutrients for optimal physical functioning and emotional well-being.

    - Benefits:
      - Supports immune function and reduces the risk of chronic diseases
      - Enhances brain health and cognitive function
      - Regulates mood and energy levels
    - Practical Tips:
      - Prioritize whole, minimally processed foods
      - Incorporate a variety of fruits, vegetables, proteins, and healthy fats into daily meals.

    [REST/HEALING]:

    Rest and recovery are essential components of a sustainable self-care routine. Quality sleep and restorative practices help the body heal, rejuvenate, and recharge for the day ahead.

    - Benefits:
      - Improves cognitive performance and memory
      - Enhances emotional resilience and stress management
      - Promotes overall physical health and longevity
    - Practical Tips:
      - Establish a consistent sleep schedule and create a calming bedtime routine.
      - Incorporate downtime during the day for relaxation and leisure activities.

    [Mindfulness/Meditation]:

    Mindfulness and meditation practices foster a deeper connection with oneself and create space for reflection, reducing stress and promoting emotional balance.

    - Benefits:
      - Increases self-awareness and emotional regulation
      - Reduces symptoms of anxiety and depression
      - Enhances overall well-being and life satisfaction
    - Practical Tips:
      - Set aside a few minutes daily for meditation, deep breathing exercises, or mindful walking.
      - Explore various techniques to find what resonates most with you.

    ##CONVERSATION ENDER:

    Once all the necessary questions have been asked and the required information is gathered,
    thank the user and inform them that their responses have been noted. Let them know that the
    AI will now proceed with creating their hyper-personalized self-care plan tailored to their needs.
    Kindly request that the user now end the conversation, emphasizing that the process is complete and
    no further input is needed.
`
//         Thank the user for their time and design a selfcare plan and describe it to them. This plan must incorporate these points:
//
//         - Describe a checklist of items.
//         - These items should be measurable action that they can perform each day.
//         - Make this plan for 30 days.

//`

// import StreamingAvatar, {
//   AvatarQuality,
//   StreamingEvents, TaskMode, TaskType, VoiceEmotion,
// } from "@heygen/streaming-avatar";
// import {
//   Button,
//   Card,
//   CardBody,
//   CardFooter,
//   Divider,
//   Input,
//   Select,
//   SelectItem,
//   Spinner,
//   Chip,
//   Tabs,
//   Tab,
// } from "@nextui-org/react";
// import { useEffect, useRef, useState } from "react";
// import { useMemoizedFn, usePrevious } from "ahooks";

// import InteractiveAvatarTextInput from "./InteractiveAvatarTextInput";

// import {AVATARS, STT_LANGUAGE_LIST} from "@/app/lib/constants";

// export default function InteractiveAvatar() {
//   const [isLoadingSession, setIsLoadingSession] = useState(false);
//   const [isLoadingRepeat, setIsLoadingRepeat] = useState(false);
//   const [stream, setStream] = useState<MediaStream>();
//   const [debug, setDebug] = useState<string>();
//   const [knowledgeId, setKnowledgeId] = useState<string>("");
//   const [avatarId, setAvatarId] = useState<string>("");
//   const [language, setLanguage] = useState<string>('en');

//   const [data, setData] = useState<StartAvatarResponse>();
//   const [text, setText] = useState<string>("");
//   const mediaStream = useRef<HTMLVideoElement>(null);
//   const avatar = useRef<StreamingAvatar | null>(null);
//   const [chatMode, setChatMode] = useState("voice_mode");
//   const [isUserTalking, setIsUserTalking] = useState(false);

//   async function fetchAccessToken() {
//     try {
//       const response = await fetch("/api/get-access-token", {
//         method: "POST",
//       });
//       const token = await response.text();
//       return token;
//     } catch (error) {
//       console.error("Error fetching access token:", error);
//     }

//     return "";
//   }

//   async function startSession() {
//     setIsLoadingSession(true);
//     const newToken = await fetchAccessToken();

//     avatar.current = new StreamingAvatar({
//       token: newToken,
//     });
//     avatar.current.on(StreamingEvents.AVATAR_START_TALKING, (e) => {
//       console.log("Time:", new Date().toLocaleTimeString());
//       console.log("Avatar started talking", e);
//     });
//     avatar.current.on(StreamingEvents.AVATAR_STOP_TALKING, (e) => {
//       console.log("Avatar stopped talking", e);
//     });
//     avatar.current.on(StreamingEvents.STREAM_DISCONNECTED, () => {
//       endSession();
//     });
//     avatar.current?.on(StreamingEvents.STREAM_READY, (event) => {
//       console.log("Time:", new Date().toLocaleTimeString());
//       setStream(event.detail);

//     });
//     avatar.current?.on(StreamingEvents.USER_START, (event) => {
//       console.log(">>>>> User started talking:", event);
//       setIsUserTalking(true);
//     });
//     avatar.current?.on(StreamingEvents.USER_STOP, (event) => {
//       console.log(">>>>> User stopped talking:", event);
//       console.log("Time:", new Date().toLocaleTimeString());
//       setIsUserTalking(false);

//     });
//     avatar.current?.on(StreamingEvents.USER_TALKING_MESSAGE, (event) =>{
//       console.log("I said this:", event);
//     });
//     try {
//       const res = await avatar.current.createStartAvatar({
//         quality: AvatarQuality.Low,
//         avatarName: "37f4d912aa564663a1cf8d63acd0e1ab",
// //         avatarId: "1733544514",
//         knowledgeBase:kBase,
//         voice: {
//           rate: 1, // 0.5 ~ 1.5
//           emotion: VoiceEmotion.EXCITED,
//         },
//         language: language,
//       });

//       setData(res);
//       // default to voice mode
//       await avatar.current?.startVoiceChat();
//       setChatMode("voice_mode");
//     } catch (error) {
//       console.error("Error starting avatar session:", error);
//     } finally {
//       setIsLoadingSession(false);
//     }
//   }
//   async function handleSpeak() {
//     setIsLoadingRepeat(true);
//     if (!avatar.current) {
//       setDebug("Avatar API not initialized");

//       return;
//     }
//     // speak({ text: text, task_type: TaskType.REPEAT })
//     await avatar.current.speak({ text: text, taskType: TaskType.REPEAT, taskMode: TaskMode.SYNC }).catch((e) => {
//       setDebug(e.message);
//     });
//     setIsLoadingRepeat(false);
//   }


//   async function handleInterrupt() {
//     if (!avatar.current) {
//       setDebug("Avatar API not initialized");

//       return;
//     }
//     await avatar.current
//       .interrupt()
//       .catch((e) => {
//         setDebug(e.message);
//       });
//   }
//   async function endSession() {
//     await avatar.current?.stopAvatar();
//     setStream(undefined);
//   }

//   const handleChangeChatMode = useMemoizedFn(async (v) => {
//     if (v === chatMode) {
//       return;
//     }
//     if (v === "text_mode") {
//       avatar.current?.closeVoiceChat();
//     } else {
//       await avatar.current?.startVoiceChat();
//     }
//     setChatMode(v);
//   });

//   const previousText = usePrevious(text);
//   useEffect(() => {
//     if (!previousText && text) {
//       avatar.current?.startListening();
//     } else if (previousText && !text) {
//       avatar?.current?.stopListening();
//     }
//   }, [text, previousText]);

//   useEffect(() => {
//     return () => {
//       endSession();
//     };
//   }, []);

//   useEffect(() => {
//     if (stream && mediaStream.current) {
//       mediaStream.current.srcObject = stream;
//       mediaStream.current.onloadedmetadata = () => {
//         mediaStream.current!.play();
//         setDebug("Playing");

//       };
//     }
//   }, [mediaStream, stream]);

//   return (
//     <div className="w-full flex flex-col gap-4">
//       <Card>
//         <CardBody className="h-[500px] flex flex-col justify-center items-center">
//           {stream ? (
//             <div className="h-[500px] w-[900px] justify-center items-center flex rounded-lg overflow-hidden">
//               <video
//                 ref={mediaStream}
//                 autoPlay
//                 playsInline
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "contain",
//                 }}
//               >
//                 <track kind="captions" />
//               </video>
//               <div className="flex flex-col gap-2 absolute bottom-3 right-3">
//                 <Button
//                   className="bg-gradient-to-tr from-indigo-500 to-indigo-300 text-white rounded-lg"
//                   size="md"
//                   variant="shadow"
//                   onClick={handleInterrupt}
//                 >
//                   Interrupt task
//                 </Button>
//                 <Button
//                   className="bg-gradient-to-tr from-indigo-500 to-indigo-300  text-white rounded-lg"
//                   size="md"
//                   variant="shadow"
//                   onClick={endSession}
//                 >
//                   End session
//                 </Button>
//               </div>
//             </div>
//           ) : !isLoadingSession ? (
//             <div className="h-full justify-center items-center flex flex-col gap-8 w-[500px] self-center">
//               <Button
//                 className="bg-gradient-to-tr from-indigo-500 to-indigo-300 w-full text-white"
//                 size="md"
//                 variant="shadow"
//                 onClick={startSession}
//               >
//                 Start session
//               </Button>
//             </div>
//           ) : (
//             <Spinner color="default" size="lg" />
//           )}
//         </CardBody>
//         <Divider />
//         <CardFooter className="flex flex-col gap-3 relative">
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }

// import React, { useEffect, useRef, useState } from 'react';
// import { useMemoizedFn, usePrevious } from 'ahooks';
// import StreamingAvatar, {
//   AvatarQuality,
//   StreamingEvents,
//   TaskMode,
//   TaskType,
//   VoiceEmotion,
//   StartAvatarResponse,
// } from '@heygen/streaming-avatar';
// import {
//   Button,
//   Card,
//   CardBody,
//   CardFooter,
//   Divider,
//   Spinner
// } from "@nextui-org/react";

// const InteractiveAvatar = () => {
//   const [isLoadingSession, setIsLoadingSession] = useState(false);
//   const [isLoadingRepeat, setIsLoadingRepeat] = useState(false);
//   const [stream, setStream] = useState<MediaStream | null>(null);
//   const [debug, setDebug] = useState<string>('');
//   const [language, setLanguage] = useState<string>('en');
//   const [data, setData] = useState<StartAvatarResponse | null>(null);
//   const [text, setText] = useState<string>('');
//   const [chatMode, setChatMode] = useState<'voice_mode' | 'text_mode'>('voice_mode');
//   const [isUserTalking, setIsUserTalking] = useState(false);

//   const mediaStream = useRef<HTMLVideoElement>(null);
//   const avatar = useRef<StreamingAvatar | null>(null);

//   // Fetch access token
//   const fetchAccessToken = async (): Promise<string> => {
//     try {
//       const response = await fetch('/api/get-access-token', { method: 'POST' });
//       return await response.text();
//     } catch (error) {
//       console.error('Error fetching access token:', error);
//       return '';
//     }
//   };

//   // Start avatar session
//   const startSession = async () => {
//     setIsLoadingSession(true);
//     const newToken = await fetchAccessToken();

//     avatar.current = new StreamingAvatar({ token: newToken });

//     // Set up event listeners with proper types
//     avatar.current.on(StreamingEvents.AVATAR_START_TALKING, (e: CustomEvent) => 
//       console.log('Avatar started talking', e));

//     avatar.current.on(StreamingEvents.AVATAR_STOP_TALKING, (e: CustomEvent) => 
//       console.log('Avatar stopped talking', e));

//     avatar.current.on(StreamingEvents.STREAM_DISCONNECTED, () => {
//       void endSession();
//     });

//     avatar.current.on(StreamingEvents.STREAM_READY, (event: CustomEvent<MediaStream>) => 
//       setStream(event.detail));

//     avatar.current.on(StreamingEvents.USER_START, () => 
//       setIsUserTalking(true));

//     avatar.current.on(StreamingEvents.USER_STOP, () => 
//       setIsUserTalking(false));

//     avatar.current.on(StreamingEvents.USER_TALKING_MESSAGE, (event: CustomEvent<string>) =>
//       console.log('User said:', event.detail));

//     try {
//       const res = await avatar.current.createStartAvatar({
//         quality: AvatarQuality.Low,
//         avatarName: '37f4d912aa564663a1cf8d63acd0e1ab',
//         knowledgeBase: kBase,
//         voice: {
//           rate: 1,
//           emotion: VoiceEmotion.EXCITED,
//         },
//         language,
//       });

//       setData(res);
//       await avatar.current?.startVoiceChat?.();
//       setChatMode('voice_mode');
//     } catch (error) {
//       console.error('Error starting avatar session:', error);
//     } finally {
//       setIsLoadingSession(false);
//     }
//   };

//   // Handle interruption with null check
//   const handleInterrupt = async () => {
//     if (!avatar.current) {
//       setDebug('Avatar API not initialized');
//       return;
//     }
//     try {
//       await avatar.current.interrupt();
//     } catch (e) {
//       setDebug(e instanceof Error ? e.message : 'Unknown error');
//     }
//   };

//   // End session with null check
//   const endSession = async () => {
//     if (avatar.current?.stopAvatar) {
//       await avatar.current.stopAvatar();
//     }
//     setStream(null);
//   };

//   // Handle chat mode changes with type safety
//   const handleChangeChatMode = useMemoizedFn(async (v: typeof chatMode) => {
//     if (v === chatMode || !avatar.current) return;

//     if (v === 'text_mode') {
//       avatar.current.closeVoiceChat?.();
//     } else {
//       await avatar.current.startVoiceChat?.();
//     }
//     setChatMode(v);
//   });

//   // Effect for listening state with null checks
//   const previousText = usePrevious(text);
//   useEffect(() => {
//     if (!previousText && text && avatar.current?.startListening) {
//       avatar.current.startListening();
//     } else if (previousText && !text && avatar.current?.stopListening) {
//       avatar.current.stopListening();
//     }
//   }, [text, previousText]);

//   // Cleanup effect
//   useEffect(() => {
//     return () => {
//       void endSession();
//     };
//   }, []);

//   // Media stream effect with null checks
//   useEffect(() => {
//     if (stream && mediaStream.current) {
//       mediaStream.current.srcObject = stream;
//       mediaStream.current.onloadedmetadata = () => {
//         mediaStream.current?.play().catch(console.error);
//         setDebug('Playing');
//       };
//     }
//   }, [stream]);

//   return (
//     <div className="w-full min-h-screen">
//       <div className="max-w-lg mx-auto px-4 py-6">
//         <Card>
//           <CardBody className="p-0">
//             <div className="relative aspect-video w-full">
//               {stream ? (
//                 <div className="relative w-full h-full">
//                   <video
//                     ref={mediaStream}
//                     autoPlay
//                     playsInline
//                     className="w-full h-full object-cover rounded-t-lg"
//                   >
//                     <track kind="captions" />
//                   </video>

//                   <div className="absolute bottom-4 left-0 right-0 px-4">
//                     <div className="flex gap-2 justify-center">
//                       <Button
//                         onClick={() => void handleInterrupt()}
//                         className="bg-gradient-to-tr from-indigo-500 to-indigo-300 text-white"
//                         size="md"
//                         variant="shadow"
//                       >
//                         Interrupt
//                       </Button>
//                       <Button
//                         onClick={() => void endSession()}
//                         className="bg-gradient-to-tr from-indigo-500 to-indigo-300 text-white"
//                         size="md"
//                         variant="shadow"
//                       >
//                         End
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
// ) : (
//   <div className="w-full h-full flex items-center justify-center min-h-[300px]">
//     {isLoadingSession ? (
//       <Spinner color="default" size="lg" />
//     ) : (
//       <Button
//         onClick={() => void startSession()}
//         className="bg-gradient-to-tr from-indigo-500 to-indigo-300 text-white"
//         size="md"
//         variant="shadow"
//       >
//         Start Session
//       </Button>
//     )}
//   </div>
// )}
//             </div>
//           </CardBody>
//           <Divider />
//           <CardFooter className="p-4">
//             {/* Additional controls can go here */}
//           </CardFooter>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default InteractiveAvatar;

// import StreamingAvatar, {
//   AvatarQuality,
//   StreamingEvents, TaskMode, TaskType, VoiceEmotion,
//   StartAvatarResponse
// } from "@heygen/streaming-avatar";
// import {
//   Button,
//   Card,
//   CardBody,
//   CardFooter,
//   Divider,
//   Input,
//   Select,
//   SelectItem,
//   Spinner,
//   Chip,
//   Tabs,
//   Tab,
// } from "@nextui-org/react";
// import { useEffect, useRef, useState } from "react";
// import { useMemoizedFn, usePrevious } from "ahooks";

// import InteractiveAvatarTextInput from "./InteractiveAvatarTextInput";

// import { AVATARS, STT_LANGUAGE_LIST } from "@/app/lib/constants";

// export default function InteractiveAvatar() {
//   const [isLoadingSession, setIsLoadingSession] = useState(false);
//   const [isLoadingRepeat, setIsLoadingRepeat] = useState(false);
//   const [stream, setStream] = useState<MediaStream>();
//   const [debug, setDebug] = useState<string>();
//   const [knowledgeId, setKnowledgeId] = useState<string>("");
//   const [avatarId, setAvatarId] = useState<string>("");
//   const [language, setLanguage] = useState<string>('en');

//   const [data, setData] = useState<StartAvatarResponse | null>(null);
//   const [text, setText] = useState<string>("");
//   const mediaStream = useRef<HTMLVideoElement>(null);
//   const avatar = useRef<StreamingAvatar | null>(null);
//   const [chatMode, setChatMode] = useState("voice_mode");
//   const [isUserTalking, setIsUserTalking] = useState(false);

//   const [isInitializing, setIsInitializing] = useState(true);

//   useEffect(() => {
//     setIsInitializing(true);
//     startSession();
//     fetchAccessToken();
//     return () => {
//       endSession();
//     };
//   }, []);

//   async function fetchAccessToken() {
//     try {
//       const response = await fetch("/api/get-access-token", {
//         method: "POST",
//       });
//       const token = await response.text();
//       return token;
//     } catch (error) {
//       console.error("Error fetching access token:", error);
//     }

//     return "";
//   }

//   async function startSession() {
//     try {
//       setIsLoadingSession(true);

//       const permissions = await navigator.permissions.query({ name: 'microphone' as PermissionName });

//       if (permissions.state === 'prompt' || permissions.state === 'denied') {
//         try {
//           await navigator.mediaDevices.getUserMedia({ audio: true });
//         } catch (error) {
//           console.error("Microphone permission denied:", error);
//           setDebug("Please allow microphone access to continue");
//           return;
//         }
//       }

//       const newToken = await fetchAccessToken();

//       avatar.current = new StreamingAvatar({
//         token: newToken,
//       });
//       avatar.current.on(StreamingEvents.AVATAR_START_TALKING, (e) => {
//         console.log("Time:", new Date().toLocaleTimeString());
//         console.log("Avatar started talking", e);
//       });
//       avatar.current.on(StreamingEvents.AVATAR_STOP_TALKING, (e) => {
//         console.log("Avatar stopped talking", e);
//       });
//       avatar.current.on(StreamingEvents.STREAM_DISCONNECTED, () => {
//         endSession();
//       });
//       avatar.current?.on(StreamingEvents.STREAM_READY, (event) => {
//         console.log("Time:", new Date().toLocaleTimeString());
//         setStream(event.detail);

//       });
//       avatar.current?.on(StreamingEvents.USER_START, (event) => {
//         console.log(">>>>> User started talking:", event);
//         setIsUserTalking(true);
//       });
//       avatar.current?.on(StreamingEvents.USER_STOP, (event) => {
//         console.log(">>>>> User stopped talking:", event);
//         console.log("Time:", new Date().toLocaleTimeString());
//         setIsUserTalking(false);

//       });
//       avatar.current?.on(StreamingEvents.USER_TALKING_MESSAGE, (event) => {
//         console.log("I said this:", event);
//       });
//       try {
//         const res = await avatar.current.createStartAvatar({
//           quality: AvatarQuality.Low,
//           avatarName: "37f4d912aa564663a1cf8d63acd0e1ab",
//           knowledgeBase: kBase,
//           voice: {
//             rate: 1,
//             emotion: VoiceEmotion.FRIENDLY,
//           },
//           language: language,
//         });

//         setData(res);
//         await avatar.current?.startVoiceChat();
//         setChatMode("voice_mode");

//         await avatar.current?.speak({
//           text: "Hi! I'm your AI health coach. I'm here to help you with healthy eating, sleep, meditation, and recovery. What would you like to focus on today?",
//           taskType: TaskType.TALK,
//           taskMode: TaskMode.SYNC
//         });

//       } catch (error) {
//         console.error("Error starting avatar session:", error);
//         setDebug("Failed to start session. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error in session setup:", error);
//       setDebug("Something went wrong. Please refresh and try again.");
//     } finally {
//       setIsLoadingSession(false);
//       setIsInitializing(false);
//     }
//   }
//   async function handleSpeak() {
//     setIsLoadingRepeat(true);
//     if (!avatar.current) {
//       setDebug("Avatar API not initialized");

//       return;
//     }
//     // speak({ text: text, task_type: TaskType.REPEAT })
//     await avatar.current.speak({ text: text, taskType: TaskType.REPEAT, taskMode: TaskMode.SYNC }).catch((e) => {
//       setDebug(e.message);
//     });
//     setIsLoadingRepeat(false);
//   }


//   async function handleInterrupt() {
//     if (!avatar.current) {
//       setDebug("Avatar API not initialized");

//       return;
//     }
//     await avatar.current
//       .interrupt()
//       .catch((e) => {
//         setDebug(e.message);
//       });
//   }
//   async function endSession() {
//     await avatar.current?.stopAvatar();
//     setStream(undefined);
//   }

//   const handleChangeChatMode = useMemoizedFn(async (v) => {
//     if (v === chatMode) {
//       return;
//     }
//     if (v === "text_mode") {
//       avatar.current?.closeVoiceChat();
//     } else {
//       await avatar.current?.startVoiceChat();
//     }
//     setChatMode(v);
//   });

//   const previousText = usePrevious(text);
//   useEffect(() => {
//     if (!previousText && text) {
//       avatar.current?.startListening();
//     } else if (previousText && !text) {
//       avatar?.current?.stopListening();
//     }
//   }, [text, previousText]);

//   useEffect(() => {
//     return () => {
//       endSession();
//     };
//   }, []);

//   useEffect(() => {
//     if (stream && mediaStream.current) {
//       mediaStream.current.srcObject = stream;
//       mediaStream.current.onloadedmetadata = () => {
//         mediaStream.current!.play();
//         setDebug("Playing");

//       };
//     }
//   }, [mediaStream, stream]);

//   return (
//     <div className="fixed inset-0 w-full h-full bg-black overflow-hidden">
//       <Card className="h-full w-full bg-black shadow-none rounded-none">
//         <CardBody className="p-0">
//           {stream ? (
//             <div className="absolute inset-0 flex items-center justify-center bg-black">
//               <video
//                 ref={mediaStream}
//                 autoPlay
//                 playsInline
//                 className="w-full h-full object-cover"
//               >
//                 <track kind="captions" />
//               </video>
//               <div className="absolute bottom-4 right-2 flex flex-col gap-2 z-50">
//                 <Button
//                   size="sm"
//                   className="bg-gradient-to-tr from-indigo-500 to-indigo-300 text-white rounded-lg"
//                   onClick={handleInterrupt}
//                 >
//                   Interrupt
//                 </Button>
//                 <Button
//                   size="sm"
//                   className="bg-gradient-to-tr from-indigo-500 to-indigo-300 text-white rounded-lg"
//                   onClick={endSession}
//                 >
//                   End
//                 </Button>
//               </div>
//             </div>
//           ) : (isInitializing || isLoadingSession) ? (
//             <div className="absolute inset-0 flex flex-col gap-4 justify-center items-center bg-black">
//               <Spinner color="default" size="lg" />
//               <p className="text-white text-sm">
//                 {isInitializing ? "Initializing AI Coach..." : "Starting session..."}
//               </p>
//             </div>
//           ) : (
//             <div className="absolute inset-0 flex flex-col gap-4 justify-center items-center bg-black">
//               <Button
//                 className="bg-gradient-to-tr from-indigo-500 to-indigo-300 text-white rounded-md"
//                 onClick={startSession}
//               >
//                 Start session
//               </Button>
//               {debug && (
//                 <p className="text-red-500 text-sm text-center px-4">
//                   {debug}
//                 </p>
//               )}
//             </div>
//           )}
//         </CardBody>
//       </Card>
//     </div>
//   );
// }

import StreamingAvatar, {
  AvatarQuality,
  StreamingEvents, TaskMode, TaskType, VoiceEmotion,
  StartAvatarResponse
} from "@heygen/streaming-avatar";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Input,
  Select,
  SelectItem,
  Spinner,
  Chip,
  Tabs,
  Tab,
} from "@nextui-org/react";
import { useEffect, useRef, useState, useMemo } from "react";
import { useMemoizedFn, usePrevious } from "ahooks";
import { useSearchParams } from 'next/navigation';

import InteractiveAvatarTextInput from "./InteractiveAvatarTextInput";

import { AVATARS, STT_LANGUAGE_LIST } from "@/app/lib/constants";

interface ChatMessage {
  type: 'assistant' | 'patient';
  text: string;
  timestamp: Date;
}

const emotionMap: { [key: string]: VoiceEmotion } = {
  'excited': VoiceEmotion.EXCITED,
  'serious': VoiceEmotion.SERIOUS,
  'friendly': VoiceEmotion.FRIENDLY,
  'soothing': VoiceEmotion.SOOTHING,
  'broadcaster': VoiceEmotion.BROADCASTER
};

const CaptionDisplay = ({ conversation, visible }: any) => {
  const consolidatedMessages = useMemo(() => {
    const messages = [];
    let currentMessage = null;
    
    for (const message of conversation) {
      if (!currentMessage || currentMessage.type !== message.type) {
        if (currentMessage) {
          messages.push(currentMessage);
        }
        currentMessage = {
          type: message.type,
          text: message.text,
          timestamp: message.timestamp
        };
      } else {
        currentMessage.text = `${currentMessage.text} ${message.text}`;
        currentMessage.timestamp = message.timestamp;
      }
    }
    
    if (currentMessage) {
      messages.push(currentMessage);
    }
    
    return messages.slice(-2);
  }, [conversation]);
  
  if (!visible) return null;
  
  return (
    <div className="absolute bottom-24 left-0 right-0 flex flex-col items-center z-40 pointer-events-none">
      {consolidatedMessages.map((message) => (
        <div
          key={`${message.type}-${message.timestamp.getTime()}`}
          className={`
            px-4 py-2 mb-2 rounded-lg max-w-[80%] text-lg
            animate-fade-in
            ${message.type === 'assistant' 
              ? 'bg-black/70 text-white' 
              : 'bg-indigo-500/70 text-white'
            }
          `}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default function InteractiveAvatar() {
  const [isLoadingSession, setIsLoadingSession] = useState(false);
  const [isLoadingRepeat, setIsLoadingRepeat] = useState(false);
  const [stream, setStream] = useState<MediaStream>();
  const [debug, setDebug] = useState<string>();
  const [knowledgeId, setKnowledgeId] = useState<string>("");
  const [avatarId, setAvatarId] = useState<string>("");
  const [language, setLanguage] = useState<string>('en');
  const [conversation, setConversation] = useState<ChatMessage[]>([]);
  const conversationRef = useRef<ChatMessage[]>([]);

  const [data, setData] = useState<StartAvatarResponse>();
  const [text, setText] = useState<string>("");
  const mediaStream = useRef<HTMLVideoElement>(null);
  const avatar = useRef<StreamingAvatar | null>(null);
  const [chatMode, setChatMode] = useState("voice_mode");
  const [isUserTalking, setIsUserTalking] = useState(false);
  const [showCaptions, setShowCaptions] = useState(true);

  useEffect(() => {
    conversationRef.current = conversation; // Update the ref whenever conversation state changes
  }, [conversation]);

  async function fetchAccessToken() {
    try {
      const response = await fetch("/api/get-access-token", {
        method: "POST",
      });
      const token = await response.text();
      return token;
    } catch (error) {
      console.error("Error fetching access token:", error);
    }

    return "";
  }
  function transformConversation(conversation: ChatMessage[]) {
    const result: any = { conversation: [] };
    let currentSpeaker = "";

    conversation.forEach((message) => {
      if (message.type === "patient") {
        currentSpeaker = "Patient";
        result.conversation.push({ [currentSpeaker]: message.text });
      } else if (message.type === "assistant") {
        if (currentSpeaker !== "Assistant") {
          // Start a new Assistant message
          currentSpeaker = "Assistant";
          result.conversation.push({ [currentSpeaker]: message.text });
        } else {
          // Append to the current Assistant message
          const lastMessage = result.conversation[result.conversation.length - 1];
          lastMessage[currentSpeaker] += message.text;
        }
      }
    });


    return result;
  }

  const searchParams = useSearchParams();
  
  // Get avatar name and emotion from URL params or use defaults
  const defaultAvatarName = "37f4d912aa564663a1cf8d63acd0e1ab";
  const defaultEmotion = VoiceEmotion.EXCITED;

  // Get values from URL or use defaults with proper type handling
  const getAvatarConfig = () => {
    const avatarName = searchParams.get('avatar_name') || defaultAvatarName;
    
    // Get emotion from URL and convert to lowercase for mapping
    const emotionParam = searchParams.get('emotion')?.toLowerCase();
    let emotion = defaultEmotion;
    
    if (emotionParam && emotionParam in emotionMap) {
      emotion = emotionMap[emotionParam];
    }
    
    return { avatarName, emotion };
  };

  // post call for conversation
   async function PostConversation(consolidatedConversation: any) {
    try {
     
      const res = await fetch("https://dev-advance.ainfo.io/plans/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(consolidatedConversation),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        console.log("API Call Successful:");
        return data; 
      } else {
        throw new Error(`API Error: ${res.status} - ${res.statusText}`);
      }
    } catch (error) {
      console.error("Error retrieving access token:", error);
      return new Response("Failed to retrieve access token", {
        status: 500,
      });
    }
  }


  async function startSession() {
    try {
      // await navigator.mediaDevices.getUserMedia({ audio: true });
      await navigator.mediaDevices.getUserMedia({
        audio: {
          autoGainControl: false,
          echoCancellation: false,
          noiseSuppression: false
        },
      })
    
      setIsLoadingSession(true);
      const newToken = await fetchAccessToken();

      avatar.current = new StreamingAvatar({
        token: newToken,
      });
      avatar.current.on(StreamingEvents.AVATAR_START_TALKING, (e) => {
      });
      avatar.current.on(StreamingEvents.AVATAR_STOP_TALKING, (e) => {
      });
      avatar.current.on(StreamingEvents.STREAM_DISCONNECTED, () => {
        let consolidated_coversation = transformConversation(conversationRef.current);
        PostConversation(consolidated_coversation)
        endSession();
      });
      avatar.current?.on(StreamingEvents.STREAM_READY, (event) => {
        setStream(event.detail);

      });
      avatar.current?.on(StreamingEvents.USER_START, (event) => {
        setIsUserTalking(true);
      });
      avatar.current?.on(StreamingEvents.USER_STOP, (event) => {
        setIsUserTalking(false);

      });
      avatar.current.on(StreamingEvents.AVATAR_TALKING_MESSAGE, (event) => {
        console.log("Avatar message event received:", event.detail);
        setConversation(prev => {
          console.log("Previous Conversation:", prev);
          const newConversation: ChatMessage[] = [...prev, {
            type: 'assistant',
            text: event.detail.message,
            timestamp: new Date()
          }];
          console.log("Updated Conversation:", newConversation);
          return newConversation;
        });
      });

      avatar.current.on(StreamingEvents.USER_TALKING_MESSAGE, (event) => {
        console.log("User message event received:", event.detail);
        setConversation(prev => {
          const newConversation: ChatMessage[] = [...prev, {
            type: 'patient',
            text: event.detail.message,
            timestamp: new Date()
          }];
          return newConversation;
        });
      });
      try {
        const { avatarName, emotion } = getAvatarConfig();
        
        const res = await avatar.current.createStartAvatar({
          quality: AvatarQuality.Low,
          avatarName: avatarName,
          knowledgeBase: kBase,
          voice: {
            rate: 1,
            emotion: emotion,
          },
          language: language,
        });

        setData(res);
        // default to voice mode
        await avatar.current?.startVoiceChat();
        setChatMode("voice_mode");
        // await avatar.current?.speak({
        //   text: "Hi! I'm your AI health coach. I'm here to help you with healthy eating, sleep, meditation, and recovery. What would you like to focus on today?",
        //   taskType: TaskType.TALK,
        //   taskMode: TaskMode.SYNC
        // });
      } catch (error) {
        console.error("Error starting avatar session:", error);
      } finally {
        setIsLoadingSession(false);
      }
    } catch (error: any) {
      console.error("Error starting session:", error);
      setDebug(error.message);
    } finally {
      setIsLoadingSession(false);
    }
  }
  async function handleSpeak() {
    setIsLoadingRepeat(true);
    if (!avatar.current) {
      setDebug("Avatar API not initialized");

      return;
    }
    // speak({ text: text, task_type: TaskType.REPEAT })
    await avatar.current.speak({ text: text, taskType: TaskType.REPEAT, taskMode: TaskMode.SYNC }).catch((e) => {
      setDebug(e.message);
    });
    setIsLoadingRepeat(false);
  }


  async function handleInterrupt() {
    if (!avatar.current) {
      setDebug("Avatar API not initialized");

      return;
    }
    await avatar.current
      .interrupt()
      .catch((e) => {
        setDebug(e.message);
      });
  }
  async function endSession() {
    await avatar.current?.stopAvatar();
    setStream(undefined);
  }

  const handleChangeChatMode = useMemoizedFn(async (v) => {
    if (v === chatMode) {
      return;
    }
    if (v === "text_mode") {
      avatar.current?.closeVoiceChat();
    } else {
      await avatar.current?.startVoiceChat();
    }
    setChatMode(v);
  });

  const previousText = usePrevious(text);
  useEffect(() => {
    if (!previousText && text) {
      avatar.current?.startListening();
    } else if (previousText && !text) {
      avatar?.current?.stopListening();
    }
  }, [text, previousText]);

  useEffect(() => {
    return () => {
      endSession();
    };
  }, []);

  useEffect(() => {
    if (stream && mediaStream.current) {
      mediaStream.current.srcObject = stream;
      mediaStream.current.onloadedmetadata = () => {
        mediaStream.current!.play();
        setDebug("Playing");

      };
    }
  }, [mediaStream, stream]);

  return (
    <div className="fixed inset-0 w-full h-full bg-black overflow-hidden">
      <Card className="h-full w-full bg-black shadow-none rounded-none">
        <CardBody className="p-0">
          {stream ? (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <video
                ref={mediaStream}
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              >
                <track kind="captions" />
              </video>

              <CaptionDisplay conversation={conversation} visible={showCaptions} />
              <div className="absolute bottom-4 right-2 flex flex-col gap-2 z-50">
              <Button
                  size="sm"
                  className="bg-gradient-to-tr from-indigo-500 to-indigo-300 text-white rounded-lg"
                  onClick={() => setShowCaptions(!showCaptions)}
                >
                  {showCaptions ? "Hide Captions" : "Show Captions"}
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-tr from-indigo-500 to-indigo-300 text-white rounded-lg"
                  onClick={handleInterrupt}
                >
                  Interrupt
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-tr from-indigo-500 to-indigo-300 text-white rounded-lg"
                  onClick={endSession}
                >
                  End
                </Button>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center min-h-[300px]">
              {isLoadingSession ? (
                <Spinner color="default" size="lg" />
              ) : (
                <Button
                  onClick={() => void startSession()}
                  className="bg-gradient-to-tr from-indigo-500 to-indigo-300 text-white"
                  size="md"
                  variant="shadow"
                >
                  Start Session
                </Button>
              )}
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
}