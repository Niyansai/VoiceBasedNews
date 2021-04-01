import React, { useState, useEffect, createRef } from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import useStyles from "./NewsCardStyle";
import classNames from "classnames";

const NewsCard = ( { article: { description, publishedAt, source, title, url, urlToImage }, i, activeArticle }) => {
    const classes = useStyles();
    const [elRefs, setElRefs] = useState([]);
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

    useEffect(() => {
        setElRefs((refs) => Array(20).fill().map((_, j)=> refs[j] || createRef()));
    }, []);

    useEffect(() => {
        if(i===activeArticle && elRefs[activeArticle]) {
            scrollToRef(elRefs[activeArticle]);
        }
    }, [i, activeArticle, elRefs]);

    

    return (
        <Card ref={elRefs[i]} className={classNames(classes.card, activeArticle === i ? classes.activeCard : null)}>
            <CardActionArea className={classes.background} href={url} target="_blank">
                    <CardMedia className={classes.media} image={urlToImage || "https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                <div className={classes.details}>
                    <Typography className={classes.date} variant="body2" color="textSecondary" component="h2">{ (new Date(publishedAt).toDateString())}</Typography>
                    <Typography className={classes.date} variant="body2" color="textSecondary" component="h2">{source.name}</Typography>  
                </div>
                <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
                <CardContent>
                    <Typography className={classes.description} variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
<CardActions className={classes.cardActions}>
    <Button size="small" color="primary">Learn More</Button>
    <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
</CardActions>


        </Card>
    )
}

export default NewsCard;

