import React,{useState, useEffect} from 'react'

const InputAnnouncement = () =>{

    const [isHover, setIsHover] = useState(false);
    useEffect(() => {

        const animationPlayState = isHover ? 'paused' : 'running';
        console.log('Test of state', animationPlayState);

        const hoverEle = document.getElementById('span');
        console.log("Its Span howered : " + hoverEle);
        if (hoverEle) {
            hoverEle.style.animationPlayState = animationPlayState;
        }

    }, [isHover]);

    const handleMouse = (e) => {
        setIsHover((prevIsHover) =>
            // console.log(prevIsHover);
            !prevIsHover
        );
    }

    const [form, setForm] = useState({
        message: 'This is announcement bar text',
        position: '',
        links: '',
        bgColorMsg: '',
        colorMsg: '',
        fontSize: '',
        fontStyling: '',
        fontFamily: '',
        fontWeight: '',
        paddingTop: '',
        paddingRight: '',
        paddingBottom: '',
        paddingLeft: '',
        barSpeed: '',
        color:'',

    });
    const [btnClose, setBtnClose ] = useState(false);

    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm(prev => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    const handleStickyTop = (event) => {
        const selectedPosition = event.target.value;
        // console.log(selectedPosition);
        if (selectedPosition === 'top') {
            const sticky = document.querySelector('.content-bar');
            // console.log(sticky);
            sticky.classList.add('bar-sticky');
        } else {
            const sticky = document.querySelector('.content-bar');
            console.log(sticky);
            sticky.classList.remove('bar-sticky');
        }
    }


    const handleClick = (event) => {
        // document.body.classList.add('span')
        const scroll = document.getElementById('span');
        const count = document.querySelector('.timer-content');
        // console.log(count);
        // console.log(scroll);
        scroll.classList.add('bar-scroll');
        count.classList.add('onscroll-countdownremove');
    }
    const handleClickRemove = (event) => {
        // document.body.classList.add('span')
        const scroll = document.getElementById('span');
        const count = document.querySelector('.timer-content');
        console.log(scroll);
        scroll.classList.remove('bar-scroll');
        count.classList.remove('onscroll-countdownremove');
    }

    const handleCopy = () =>{
        const copyBtn = document.querySelector('.btn-copy');
       
        const copyText = document.querySelector('#couponCode').value;
       
        const textArea = document.createElement("textarea");
        textArea.value = copyText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        // alert("Copy Text : "+copyText);
    }

    console.log(form);
    // console.log(fontsize);
    // console.log('FONT FAMILY :',fontFamilys);

    //Timer function
    const [remDays, setRemDays] = useState(0);
    const [remTime, setRemTime] = useState('');
    const [remainingTime, setRemainingTime] = useState(0);
    
    const calTimeRemaining = () => {
        if (!remDays || !remTime) {
            return;
          }

        const [year, month, day] = remDays.split('-');
        const [hours, minutes] = remTime.split(':');
        const tarDate = new Date(year, month - 1, day, hours, minutes);

        const now = new Date();
        const differenceTime = tarDate - now;
        setRemainingTime(differenceTime);
    }

    useEffect(() => {
        calTimeRemaining();
        const timerInterval = setInterval(calTimeRemaining, 1000);

        return () => {
            clearInterval(timerInterval);
        };
    }, [remDays, remTime]);

    const timeFormate = (ms) => {
        const days = Math.floor(ms / (1000 * 60 * 60 * 24));
        const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((ms % (1000 * 60)) / 1000);

        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  return (
    <div><p>InputAnnouncement</p>
     <div className="form-container">
                <div className='message'>
                    <label htmlFor="">Message</label><br />
                    <input type="text" id='message' name='message' value={form.message} onChange={handleChange} />
                </div>
                <div className="bar-position">
                    <label htmlFor="">Bar Position</label><br />
                    <select name="position" value={form.position} id="" onClick={handleStickyTop} onChange={handleChange} >
                        <option value="top">On the Top of the Page</option>
                        <option className='bar-scrolling' value="sticky">Scroll</option>
                        <option value="collection">Stay in the collection</option>
                    </select>
                </div>

                <div className="link-type">
                    <label htmlFor="">Link Type</label><br />
                    <select name="links" id="" value={form.links} onChange={handleChange}>
                        <option value="msg">For Meassage</option>
                        <option value="btn">For Button</option>
                        <option value="msg-btn">For Message and Button</option>
                    </select>
                </div>
                <div className="bar-radio-btn-wrapper">
                    <span>Announcement Bar Behaviour</span><br />
                    <div>
                        <label htmlFor="" className='bar-label-1'>Static</label>
                        <input type="radio" value="" name='bar-btn' onClick={handleClickRemove} />
                    </div>
                    {/* <input type="radio" value="" name='bar-btn' id="MenuTitle2" onClick={this.clickMenu.bind(this,'MenuTitle2')}/> */}
                    <div >
                        <label htmlFor="" className='bar-label-2'>Scroll</label>
                        <input type="radio" value="" name='bar-btn' onClick={handleClick} /><br />

                        <label htmlFor="">Speed (10 to 20 seconds)</label>
                        <input type="range" name='barSpeed' min={10} max={20} value={form.barSpeed} onChange={handleChange} />

                    </div>


                </div>
                <div className="color-picker">
                    <div>
                        <label for="">Background Color - Message</label><br />
                        <input type="color" id="" name="bgColorMsg" value={form.bgColorMsg} onChange={handleChange} />
                    </div>
                    <div>
                        <label for="">Font Color - Message</label><br />
                        <input type="color" id="colorMsg" name="colorMsg" value={form.colorMsg} onChange={handleChange} />
                    </div>
                    <div>
                        <label for="favcolor">Background Color - Button</label><br />
                        <input type="color" id="favcolor" name="favcolor" value="#28E6E3" />
                    </div>
                    <div>
                        <label for="favcolor">Font Color - Button</label><br />
                        <input type="color" id="" name="color" value={form.color} onChange={handleChange}/>
                    </div>
                </div>
                <div className="bar-font-styles">
                    <div>
                        <span className=''>Fonts</span> <br /><br />
                        <label htmlFor="">Font Size</label><br />
                        <input className='font-input' type="number" name='fontSize' value={form.fontSize} onChange={handleChange} />

                    </div>
                    <div>
                        <label htmlFor="">Font Style</label><br />
                        <select name="fontStyling" id="" value={form.fontStyling} onChange={handleChange} >
                            <option value="normal">Normal</option>
                            <option value="italic">Italic</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Font Family</label><br />
                        <select name="fontFamily" id="" value={form.fontFamily} onChange={handleChange}>
                            <option value="Poppins">Poppins</option>
                            <option value="sans-serif">Sans-Serif</option>
                            <option value="Arial">Arial</option>
                            <option value="Times New Roman">Times New Roman</option>
                            <option value="cursive">cursive</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Font Weight</label><br />
                        <select name="fontWeight" id="" value={form.fontWeight} onChange={handleChange}>
                            <option value="normal">Normal</option>
                            <option value="bold">Bold</option>
                            <option value="lighter">Lighter</option>
                        </select>
                    </div>
                </div>
                <div className="bar-spacing">
                    Padding <br />
                    <div className='bar-spacing-box'>
                        <label htmlFor="">Padding - Top</label><br />
                        <input type="number" name="paddingTop" id="" value={form.paddingTop} onChange={handleChange} />
                    </div>
                    <div className='bar-spacing-box'>
                        <label htmlFor="">Padding - Right</label><br />
                        <input type="number" name="paddingRight" id="" value={form.paddingRight} onChange={handleChange} />
                    </div>
                    <div className='bar-spacing-box'>
                        <label htmlFor="">Padding - Bottom</label><br />
                        <input type="number" name="paddingBottom" id="" value={form.paddingBottom} onChange={handleChange} />
                    </div>
                    <div className='bar-spacing-box'>
                        <label htmlFor="">Padding - Left</label><br />
                        <input type="number" name="paddingLeft" id="" value={form.paddingLeft} onChange={handleChange} />
                    </div>
                </div><br />
                <div class="Timer">
                    <label htmlFor="date">Date</label>
                <input type="date" placeholder="Enter days" name="remDays" value={remDays} onChange={(e) => setRemDays(e.target.value)} />
                    <label htmlFor="time">Time</label>
                <input type="time" placeholder="" name="remTime"
                    value={remTime} onChange={(e) => setRemTime(e.target.value)} />
                
                </div>
            </div></div>
  )
}

export default InputAnnouncement;