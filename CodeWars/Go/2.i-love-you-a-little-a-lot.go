// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

// My Answer

package kata

func HowMuchILoveYou(i int) string {
	arr := [6]string{"I love you", "a little", "a lot", "passionately", "madly", "not at all"}
	if i < 1 {
		return arr[0]
	} else if i <= 6 {
		return arr[i-1]
	} else if i%6 == 0 {
		return arr[5]
	} else {
		return arr[i%6-1]
	}
}

// Best Answers

func HowMuchILoveYou2(i int) string {
	return []string{"I love you", "a little", "a lot", "passionately", "madly", "not at all"}[(i-1)%6]
}

func HowMuchILoveYou3(i int) string {
	d := 6
	var arr = map[int]string{
		1: "I love you",
		2: "a little",
		3: "a lot",
		4: "passionately",
		5: "madly",
		0: "not at all",
	}
	return arr[i%d]
}

func HowMuchILoveYou4(i int) string {
	phrase := ""
	switch i % 6 {
	case 1:
		phrase = "I love you"
	case 2:
		phrase = "a little"
	case 3:
		phrase = "a lot"
	case 4:
		phrase = "passionately"
	case 5:
		phrase = "madly"
	case 0:
		phrase = "not at all"
	}
	return phrase
}