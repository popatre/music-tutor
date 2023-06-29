import React, { useEffect, useRef } from "react";
import * as Tone from "tone";

import styles from "./MelodyMachine.module.scss";
import Controls from "./Controls";

type Track = {
    id: number;
    synth: Tone.PolySynth;
    note: string;
};

type Props = {
    samples: { name: string; note: string }[];
    numOfSteps?: number;
};

export default function DrumMachine({ samples, numOfSteps = 16 }: Props) {
    const tracksRef = useRef<Track[]>([]);
    const stepsRef = useRef<HTMLInputElement[][]>([[]]);
    const lampsRef = useRef<HTMLInputElement[]>([]);
    const seqRef = useRef<Tone.Sequence | null>(null);

    const trackIds = [...Array(samples.length).keys()] as const;
    const stepIds = [...Array(numOfSteps).keys()] as const;

    useEffect(() => {
        Tone.Transport.bpm.value = 60;
        tracksRef.current = samples.map((sample, i) => ({
            id: i,
            synth: new Tone.PolySynth().toDestination(),
            note: sample.note,
        }));
        seqRef.current = new Tone.Sequence(
            (time, step) => {
                tracksRef.current.map((trk) => {
                    if (stepsRef.current[trk.id]?.[step]?.checked) {
                        trk.synth.triggerAttackRelease(trk.note, 0.1, time);
                    }
                    lampsRef.current[step].checked = true;
                });
            },
            [...stepIds],
            "16n"
        );
        seqRef.current.start(0);

        return () => {
            seqRef.current?.dispose();
            tracksRef.current.map((trk) => void trk.synth.dispose());
        };
    }, [samples, numOfSteps]);

    return (
        <div className={styles.machine}>
            <div className={styles.labelList}>
                {samples.map((sample) => (
                    <div>{sample.name}</div>
                ))}
            </div>
            <div className={styles.grid}>
                <div className={styles.row}>
                    {stepIds.map((stepId) => (
                        <label className={styles.lamp}>
                            <input
                                type="radio"
                                name="lamp"
                                id={"lamp" + "-" + stepId}
                                disabled
                                ref={(elm) => {
                                    if (!elm) return;
                                    lampsRef.current[stepId] = elm;
                                }}
                                className={styles.lamp__input}
                            />
                            <div className={styles.lamp__content} />
                        </label>
                    ))}
                </div>
                <div className={styles.cellList}>
                    {trackIds.map((trackId) => (
                        <div key={trackId} className={styles.row}>
                            {stepIds.map((stepId) => {
                                const id = trackId + "-" + stepId;

                                return (
                                    <label className={styles.cell}>
                                        <input
                                            key={id}
                                            id={id}
                                            type="checkbox"
                                            ref={(elm) => {
                                                if (!elm) return;
                                                if (
                                                    !stepsRef.current[trackId]
                                                ) {
                                                    stepsRef.current[trackId] =
                                                        [];
                                                }
                                                stepsRef.current[trackId][
                                                    stepId
                                                ] = elm;
                                            }}
                                            className={styles.cell__input}
                                        />
                                        <div
                                            className={`${
                                                styles.cell__content
                                            } ${styles[`cell__${trackId}`]}`}
                                        />
                                    </label>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>

            <Controls />
        </div>
    );
}
