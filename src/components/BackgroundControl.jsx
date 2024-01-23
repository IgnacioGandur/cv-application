import { useState } from 'react';
// Light backgrounds
import greekVase from '../assets/images/light/greek-vase.webp';
import jojoLight from '../assets/images/light/jojo-pattern-light.png';
import diagonalStrip from '../assets/images/light/diagonal_striped_brick.webp';
import doodles from '../assets/images/light/doodles.webp';
import hypnotize from '../assets/images/light/hypnotize.webp';
import leather from '../assets/images/light/large_leather.webp';
import leaves from '../assets/images/light/leaves.webp';
import round from '../assets/images/light/round.webp';
import skeletalWeave from '../assets/images/light/skelatal_weave.webp';
import stripes from '../assets/images/light/stripes-light.webp';
import topography from '../assets/images/light/topography.webp';
import memphis from '../assets/images/light/memphis-mini.webp';
import papyrus from '../assets/images/light/papyrus.webp';
import sun from '../assets/images/light/sun-pattern.webp';
import email from '../assets/images/light/email-pattern.webp';
import spiration from '../assets/images/light/spiration-light.webp';
// Dark backgrounds
import darkDenim from '../assets/images/dark/denim.webp';
import stardust from '../assets/images/dark/stardust.png';
import curls from '../assets/images/dark/curls.png';
import spirationDark from '../assets/images/dark/spiration-dark.webp';
import jojoDark from '../assets/images/dark/jojo-pattern-dark.png';
import alwaysGrey from '../assets/images/dark/always_grey.webp';
import fancyCushion from '../assets/images/dark/fancy-cushion.webp';
import randomGreyVariations from '../assets/images/dark/random_grey_variations.webp';
import argyle from '../assets/images/dark/argyle.webp';
import cartographer from '../assets/images/dark/cartographer.webp';
import embroidery from '../assets/images/dark/dark_embroidery.png';
import darkWood from '../assets/images/dark/dark_wood.png';
import memphisDark from '../assets/images/dark/memphis-mini-dark.webp';
import woven from '../assets/images/dark/woven.webp';
import blackFloral from '../assets/images/dark/black-floral-pattern.png';
import colorfulFloral from '../assets/images/dark/colorful-floral-pattern.png';
// CSS
import Styles from '../styles/BackgroundControl.module.css';

export default function BackgroundControl({ handleBackgroundOptions }) {
    const [enableBackgroundOptions, setEnableBackgroundOptions] =
        useState(false);
    const [customTheme, setCustomTheme] = useState(false);
    const backgrounds = {
        light: [
            {
                name: 'Email',
                url: email,
            },
            {
                name: "Jojo's light",
                url: jojoLight,
            },
            {
                name: 'Topography',
                url: topography,
            },
            {
                name: 'Stripes',
                url: stripes,
            },
            {
                name: 'Skeletal weave',
                url: skeletalWeave,
            },
            {
                name: 'Round',
                url: round,
            },
            {
                name: 'Leaves',
                url: leaves,
            },
            {
                name: 'Leather',
                url: leather,
            },
            {
                name: 'Hypnotize',
                url: hypnotize,
            },
            {
                name: 'Doodles',
                url: doodles,
            },
            {
                name: 'Diagonal strip',
                url: diagonalStrip,
            },
            {
                name: 'Spiration',
                url: spiration,
            },
            {
                name: 'Greek vase',
                url: greekVase,
            },
            {
                name: 'Memphis mini',
                url: memphis,
            },
            {
                name: 'Papyrus',
                url: papyrus,
            },
            {
                name: 'Sun',
                url: sun,
            },
        ],
        dark: [
            {
                name: 'Dark denim',
                url: darkDenim,
            },
            {
                name: 'Stardust',
                url: stardust,
            },
            {
                name: 'Curls',
                url: curls,
            },
            {
                name: 'Spiation dark',
                url: spirationDark,
            },
            {
                name: "Jojo's dark",
                url: jojoDark,
            },
            {
                name: 'Grey variations',
                url: randomGreyVariations,
            },
            {
                name: 'Fancy cushion',
                url: fancyCushion,
            },
            {
                name: 'Always grey',
                url: alwaysGrey,
            },
            {
                name: 'Argyle',
                url: argyle,
            },
            {
                name: 'Cartographer',
                url: cartographer,
            },
            {
                name: 'Dark embroidery',
                url: embroidery,
            },
            {
                name: 'Dark wood',
                url: darkWood,
            },
            {
                name: 'Memphis mini dark',
                url: memphisDark,
            },
            {
                name: 'Woven',
                url: woven,
            },
            {
                name: 'Black floral',
                url: blackFloral,
            },
            {
                name: 'Colorful floral',
                url: colorfulFloral,
            },
        ],
    };

    return (
        <form action='#'>
            <fieldset className={Styles['background-options__fieldset']}>
                <legend
                    className={Styles['background-options__fielset__legend']}
                >
                    Background options
                </legend>
                <label
                    className={
                        Styles['background-options__fieldset__label--checkbox']
                    }
                    htmlFor='control-separators-colors'
                >
                    Disable colorful details?
                    <input
                        type='checkbox'
                        className={
                            Styles[
                                'background-options__fieldset__label__input--checkbox'
                            ]
                        }
                        id='control-separators-colors'
                        name='control-separators-colors'
                        onChange={(e) => {
                            handleBackgroundOptions(e);
                        }}
                    />
                </label>
                <label
                    htmlFor='enable-background'
                    className={
                        Styles['background-options__fieldset__label--checkbox']
                    }
                >
                    Enable a decorative background in the CV?
                    <input
                        className={
                            Styles[
                                'background-options__fieldset__label__input--checkbox'
                            ]
                        }
                        type='checkbox'
                        name='enable-background'
                        id='enable-background'
                        onChange={(e) => {
                            setEnableBackgroundOptions(
                                !enableBackgroundOptions,
                            );
                            handleBackgroundOptions(
                                e,
                                backgrounds.light[0].url,
                            );
                        }}
                    />
                </label>
                {enableBackgroundOptions && (
                    <>
                        <p>Light themes</p>
                        <div
                            className={
                                Styles[
                                    'background-options__fieldset__themes-container'
                                ]
                            }
                        >
                            {backgrounds.light.map((image, index) => (
                                <label key={index} htmlFor={image.name}>
                                    {image.name}
                                    <input
                                        type='radio'
                                        id={image.name}
                                        name='selected-background'
                                        value={image.name}
                                        onChange={(e) => {
                                            handleBackgroundOptions(
                                                e,
                                                image.url,
                                                false,
                                            );
                                            setCustomTheme(false);
                                            document.querySelector(
                                                '#custom-theme',
                                            ).checked = false;
                                        }}
                                    />
                                    <img src={image.url} alt={image.name} />
                                </label>
                            ))}
                        </div>
                        <p>Dark themes</p>
                        <div
                            className={
                                Styles[
                                    'background-options__fieldset__themes-container'
                                ]
                            }
                        >
                            {backgrounds.dark.map((image, index) => (
                                <label htmlFor={image.name} key={index}>
                                    {image.name}
                                    <input
                                        type='radio'
                                        id={image.name}
                                        name='selected-background'
                                        value={image.name}
                                        onChange={(e) => {
                                            handleBackgroundOptions(
                                                e,
                                                image.url,
                                                true,
                                            );
                                            setCustomTheme(false);
                                            document.querySelector(
                                                '#custom-theme',
                                            ).checked = false;
                                        }}
                                    />
                                    <img src={image.url} alt={image.name} />
                                </label>
                            ))}
                        </div>
                        <label
                            className={
                                Styles[
                                    'background-options__fieldset__label--checkbox'
                                ]
                            }
                            htmlFor='custom-theme'
                        >
                            Custom theme?
                            <input
                                type='checkbox'
                                className={
                                    Styles[
                                        'background-options__fieldset__label__input--checkbox'
                                    ]
                                }
                                id='custom-theme'
                                name='custom-theme'
                                onChange={(e) => {
                                    setCustomTheme(!customTheme);
                                    handleBackgroundOptions(
                                        e,
                                        backgrounds.light[0].url,
                                        false,
                                    );
                                }}
                            />
                        </label>
                        {customTheme && (
                            <div
                                className={
                                    Styles[
                                        'background-options__fieldset__custom-theme-options'
                                    ]
                                }
                            >
                                <label
                                    htmlFor='background-url'
                                    className={
                                        Styles[
                                            'background-options__fieldset__custom-theme-options__label-url'
                                        ]
                                    }
                                >
                                    <p>
                                        Background url{' '}
                                        <i>
                                            (Make sure to use a repeatable
                                            pattern image)
                                        </i>
                                    </p>
                                    <input
                                        placeholder='URL to your image...'
                                        type='url'
                                        id='background-url'
                                        name='background-url'
                                        onChange={(e) => {
                                            handleBackgroundOptions(e);
                                        }}
                                    />
                                </label>
                                <label htmlFor='background-opacity'>
                                    Background opacity
                                    <input
                                        type='range'
                                        id='background-opacity'
                                        name='background-opacity'
                                        min='0'
                                        max='9'
                                        defaultValue='0'
                                        onChange={(e) => {
                                            const userImage =
                                                document.querySelector(
                                                    '#background-url',
                                                ).value;
                                            handleBackgroundOptions(
                                                e,
                                                userImage,
                                            );
                                        }}
                                    />
                                </label>
                                <label
                                    htmlFor='dark-background'
                                    className={
                                        Styles[
                                            'background-options__fieldset__label--checkbox'
                                        ]
                                    }
                                >
                                    White text?
                                    <input
                                        className={
                                            Styles[
                                                'background-options__fieldset__label__input--checkbox'
                                            ]
                                        }
                                        type='checkbox'
                                        id='dark-background'
                                        name='dark-background'
                                        onChange={(e) => {
                                            handleBackgroundOptions(e);
                                        }}
                                    />
                                </label>
                            </div>
                        )}
                    </>
                )}
            </fieldset>
        </form>
    );
}
