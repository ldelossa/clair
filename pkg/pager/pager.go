package pager

import (
	"github.com/google/uuid"
)

// Page communicates a bare-minimum paging procotol with clients
type Page struct {
	// the max number of elements returned in a page
	Size uint64 `json:"size"`
	// the next id to retrieve
	Next *uuid.UUID `json:"next,omitempty"`
}

//// SQLPager implements a bare-minimum sql paging algorithm.
////
//// The input Page's Next field represents the page to calculate.
//// The output Page's Next field tells the client the next page to fetch.
//// The output Page's Next field will be -1 when returning the final page.
////
//// The offset and limit output arguments are to be used in a sql query to
//// retrieve the correct subset of elements for the requested page.
//func SQLPager(inPage Page, count uint64) (outPage Page, offset uint64, limit uint64) {
//	// correct for a possible zero value Page coming in,
//	// pages are not 0 indexed for simplicity.
//	if inPage.Next == 0 {
//		inPage.Next = 1
//	}

//	// calculate the total number of pages necessary when
//	// the desired page size is provided and take the ceiling.
//	// if pages <= 0 bump it to one, we always deliver at least
//	// one page, even if empty.
//	var pages float64 = float64(count) / float64(inPage.Size)
//	pages = math.Ceil(pages)
//	if pages <= 0 {
//		pages++
//	}

//	// determine the next page for the client to request
//	// if we are serving the final page, return -1
//	var next int64 = inPage.Next + 1
//	if inPage.Next >= int64(pages) {
//		next = -1
//	}

//	// create the page object we will return to the client
//	outPage = Page{
//		Size: inPage.Size,
//		Next: next,
//	}

//	// compute offset for sql query.
//	// page 1 = 0 * page.Size
//	// page 2 = 1 * page.Size
//	// etc...
//	offset = inPage.Size * uint64((inPage.Next - 1))
//	// limit will be remain a static number of maximum
//	// record to return from the db.
//	limit = inPage.Size

//	return outPage, offset, limit
//}
