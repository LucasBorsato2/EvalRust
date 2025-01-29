searchState.loadedDescShard("eval_lru_cache", 0, "Cache LRU (Least Recently Used)\n<code>?</code> formatting.\nDerive macro generating an impl of the trait <code>Debug</code>.\nThe associated error which can be returned from parsing.\nParse a value from a string\nA hashable type.\nDerive macro generating an impl of the trait <code>Hash</code>.\nFormats the value using the given formatter.\nParses a string <code>s</code> to return a value of this type.\nFeeds this value into the given <code>Hasher</code>.\nFeeds a slice of this type into the given <code>Hasher</code>.\nTraits, helpers, and type definitions for core I/O …\nCache LRU utilisant HashMap pour l’accès rapide et Vec …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCrée un nouveau cache avec une capacité donnée\nCrée un cache à partir d’un fichier (format : …\nSauvegarde le cache dans un fichier (format : clé,valeur …\nA socket address could not be bound because the address is …\nA nonexistent interface was requested or the requested …\nAn entity already exists, often a file.\nProgram argument list too long.\nA borrowed byte buffer which is incrementally filled and …\nA writeable view of the unfilled portion of a <code>BorrowedBuf</code>.\nThe operation failed because a pipe was closed.\nA <code>BufRead</code> is a type of <code>Read</code>er which has an internal …\nThe <code>BufReader&lt;R&gt;</code> struct adds buffering to any reader.\nWraps a writer and buffers its output.\nAn iterator over <code>u8</code> values of a reader.\nAdapter to chain together two readers.\nThe connection was aborted (terminated) by the remote …\nThe connection was refused by the remote server.\nThe connection was reset by the remote server.\nCross-device or cross-filesystem (hard) link or rename.\nSets the offset to the current position plus the specified …\nA <code>Cursor</code> wraps an in-memory buffer and provides it with a …\nDeadlock (avoided).\nA non-empty directory was specified where an empty …\n<code>Empty</code> ignores any data written via <code>Write</code>, and will always …\nSets the offset to the size of this object plus the …\nContains the error value\nThe error type for I/O operations of the <code>Read</code>, <code>Write</code>, <code>Seek</code>…\nA list specifying general categories of I/O error.\nExecutable file is busy.\nFile larger than allowed or supported.\nLoop in the filesystem or IO subsystem; often, too many …\nFilesystem quota was exceeded.\nThe remote host is not reachable.\nThis operation was interrupted.\nAn error returned by <code>BufWriter::into_inner</code> which combines …\nData not valid for the operation were encountered.\nA filename was invalid.\nA parameter was incorrect.\nA buffer type used with <code>Write::write_vectored</code>.\nA buffer type used with <code>Read::read_vectored</code>.\nThe filesystem object is, unexpectedly, a directory.\nTrait to determine if a descriptor/handle refers to a …\nWraps a writer and buffers output to it, flushing whenever …\nAn iterator over the lines of an instance of <code>BufRead</code>.\nThe system’s networking is down.\nThe network containing the remote host is not reachable.\nA filesystem object is, unexpectedly, not a directory.\nThe network operation failed because it was not connected …\nAn entity was not found, often a file.\nSeek on unseekable file.\nContains the success value\nA custom error that does not fall under any other I/O …\nAn operation could not be completed, because it failed to …\nThe operation lacked the necessary privileges to complete.\nThe type of raw OS error codes returned by …\nThe <code>Read</code> trait allows for reading bytes from a source.\nThe filesystem or storage medium is read-only, but a write …\nA reader which yields one byte over and over and over and …\nResource is busy.\nA specialized <code>Result</code> type for I/O operations.\nThe <code>Seek</code> trait provides a cursor which can be moved within …\nEnumeration of possible methods to seek within an I/O …\nA writer which will move data into the void.\nAn iterator over the contents of an instance of <code>BufRead</code> …\nStale network file handle.\nSets the offset to the provided number of bytes.\nA handle to the standard error stream of a process.\nA locked reference to the <code>Stderr</code> handle.\nA handle to the standard input stream of a process.\nA locked reference to the <code>Stdin</code> handle.\nA handle to the global standard output stream of the …\nA locked reference to the <code>Stdout</code> handle.\nThe underlying storage (typically, a filesystem) is full.\nReader adapter which limits the bytes read from an …\nThe I/O operation’s timeout expired, causing it to be …\nToo many (hard) links to the same filesystem object.\nAn error returned when an operation could not be completed …\nThis operation is unsupported on this platform.\nThe operation needs to block to complete, but the blocking …\nA trait for objects which are byte-oriented sinks.\nAn error returned when an operation could not be completed …\nError returned for the buffered data from …\nAdvance the internal cursor of the slice.\nAdvance the internal cursor of the slice.\nAdvances the cursor by asserting that <code>n</code> bytes have been …\nAdvance a slice of slices.\nAdvance a slice of slices.\nAdvances the cursor by asserting that <code>n</code> bytes have been …\nAppends data to the cursor, advancing position within its …\nReturns a mutable reference to the whole cursor.\nReturns a reference to the internally buffered data.\nReturns a reference to the internally buffered data.\nCreates a “by reference” adaptor for this instance of …\nCreates a “by reference” adapter for this instance of …\nTransforms this <code>Read</code> instance to an <code>Iterator</code> over its …\nReturns the number of bytes the internal buffer can hold …\nReturns the number of bytes the internal buffer can hold …\nReturns the total capacity of the buffer.\nReturns the available space in the cursor.\nCreates an adapter which will chain this stream with …\nClears the buffer, resetting the filled region to empty.\nTells this buffer that <code>amt</code> bytes have been consumed from …\nCopies the entire contents of a reader into a writer.\nAttempts to downcast the custom boxed error to <code>E</code>.\nCreates a value that is always at EOF for reads, and …\nInitializes all bytes in the cursor.\nReturns the error which caused the call to …\nReturns the contents of the internal buffer, filling it …\nReturns a shared reference to the filled portion of the …\nReturns a mutable reference to the filled portion of the …\nFlushes this output stream, ensuring that all …\nShows a human-readable description of the <code>ErrorKind</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConverts a <code>alloc::ffi::NulError</code> into a <code>Error</code>.\nConverts <code>TryReserveError</code> to an error with …\nConverts an <code>ErrorKind</code> into an <code>Error</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new instance of an <code>Error</code> from a particular OS …\nGets a mutable reference to the underlying reader.\nGets a mutable reference to the underlying writer.\nGets a mutable reference to the underlying writer.\nReturns a mutable reference to the inner error wrapped by …\nGets a mutable reference to the underlying value in this …\nGets mutable references to the underlying readers in this …\nGets a mutable reference to the underlying reader.\nGets a reference to the underlying reader.\nGets a reference to the underlying writer.\nGets a reference to the underlying writer.\nReturns a reference to the inner error wrapped by this …\nGets a reference to the underlying value in this cursor.\nGets references to the underlying readers in this <code>Chain</code>.\nGets a reference to the underlying reader.\nChecks if the underlying <code>Read</code> has any data left to be read.\nReturns the length of the initialized part of the buffer.\nReturns a mutable reference to the initialized portion of …\nReturns a shared reference to the initialized portion of …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsumes the <code>IntoInnerError</code> and returns the error which …\nUnwraps this <code>BufReader&lt;R&gt;</code>, returning the underlying reader.\nUnwraps this <code>BufWriter&lt;W&gt;</code>, returning the underlying writer.\nReturns the perhaps-unwritten data.  Some of this data may …\nUnwraps this <code>LineWriter</code>, returning the underlying writer.\nConsumes the <code>Error</code>, returning its inner error (if any).\nReturns the buffered writer instance which generated the …\nConsumes this cursor, returning the underlying value.\nConsumes the <code>Chain</code>, returning the wrapped readers.\nConsumes the <code>Take</code>, returning the wrapped reader.\nDisassembles this <code>BufWriter&lt;W&gt;</code>, returning the underlying …\nConsumes the <code>IntoInnerError</code> and returns the error which …\nDetermines if this <code>Read</code>er has an efficient <code>read_vectored</code> …\nReturns <code>true</code> if the descriptor/handle refers to a …\nDetermines if this <code>Write</code>r has an efficient <code>write_vectored</code> …\nReturns the corresponding <code>ErrorKind</code> for this error.\nReturns an error representing the last OS error which …\nReturns the length of the filled part of the buffer.\nReturns the number of bytes that can be read before this …\nConsumes this handle and returns an iterator over input …\nReturns an iterator over the lines of this reader.\nLocks this handle to the standard input stream, returning …\nLocks this handle to the standard output stream, returning …\nLocks this handle to the standard error stream, returning …\nCreates a new <code>BufReader&lt;R&gt;</code> with a default buffer capacity. …\nCreates a new <code>BufWriter&lt;W&gt;</code> with a default buffer capacity. …\nCreates a new <code>LineWriter</code>.\nCreates a new I/O error from a known kind of error as well …\nCreates a new <code>IoSliceMut</code> wrapping a byte slice.\nCreates a new cursor wrapping the provided underlying …\nCreates a new <code>IoSlice</code> wrapping a byte slice.\nCreates a new I/O error from an arbitrary error payload.\nAttempt to look ahead <code>n</code> bytes.\nReturns the current position of this cursor.\nThe I/O Prelude.\nReturns the OS error that this error represents (if any).\nPull some bytes from this source into the specified …\nPull some bytes from this source into the specified buffer.\nReads the exact number of bytes required to fill <code>cursor</code>.\nReads the exact number of bytes required to fill <code>buf</code>.\nLocks this handle and reads a line of input, appending it …\nReads all bytes until a newline (the <code>0xA</code> byte) is reached, …\nThis function is not supported by <code>io::Repeat</code>, because there…\nReads all bytes until EOF in this source, placing them …\nReads all bytes from a reader into a new <code>String</code>.\nThis function is not supported by <code>io::Repeat</code>, because there…\nReads all bytes until EOF in this source, appending them …\nReads all bytes into <code>buf</code> until the delimiter <code>byte</code> or EOF …\nLike <code>read</code>, except that it reads into a slice of buffers.\nReborrows this cursor by cloning it with a smaller …\nCreates an instance of a reader that infinitely repeats …\nRewind to the beginning of a stream.\nSeek to an offset, in bytes, in a stream.\nSeek to an offset, in bytes, in the underlying reader.\nSeek to the offset, in bytes, in the underlying writer.\nSeeks relative to the current position. If the new …\nSeeks relative to the current position.\nSeeks relative to the current position.\nAsserts that the first <code>n</code> bytes of the buffer are …\nAsserts that the first <code>n</code> unfilled bytes of the cursor are …\nSets the number of bytes that can be read before this …\nSets the position of this cursor.\nCreates an instance of a writer which will successfully …\nSkips all bytes until the delimiter <code>byte</code> or EOF is reached.\nReturns an iterator over the contents of this reader split …\nSplits the underlying slice at the cursor position and …\nSplits the underlying slice at the cursor position and …\nConstructs a new handle to the standard error of the …\nConstructs a new handle to the standard input of the …\nConstructs a new handle to the standard output of the …\nReturns the length of this stream (in bytes).\nReturns the current seek position from the start of the …\nReturns the current seek position from the start of the …\nCreates an adapter which will read at most <code>limit</code> bytes …\nReturns a cursor over the unfilled part of the buffer.\nReturns a mutable reference to the uninitialized part of …\nCreates a new <code>BufReader&lt;R&gt;</code> with the specified buffer …\nCreates a new <code>BufWriter&lt;W&gt;</code> with at least the specified …\nCreates a new <code>LineWriter</code> with at least the specified …\nWrites a buffer into this writer, returning how many bytes …\nAttempts to write an entire buffer into this writer.\nAttempts to write multiple buffers into this writer.\nWrites a formatted string into this writer, returning any …\nLike <code>write</code>, except that it writes from a slice of buffers.\nReturns the number of bytes written to this cursor since …\nA <code>BufRead</code> is a type of <code>Read</code>er which has an internal …\nThe <code>Read</code> trait allows for reading bytes from a source.\nThe <code>Seek</code> trait provides a cursor which can be moved within …\nA trait for objects which are byte-oriented sinks.\nCreates a “by reference” adaptor for this instance of …\nCreates a “by reference” adapter for this instance of …\nTransforms this <code>Read</code> instance to an <code>Iterator</code> over its …\nCreates an adapter which will chain this stream with …\nTells this buffer that <code>amt</code> bytes have been consumed from …\nReturns the contents of the internal buffer, filling it …\nFlushes this output stream, ensuring that all …\nChecks if the underlying <code>Read</code> has any data left to be read.\nDetermines if this <code>Read</code>er has an efficient <code>read_vectored</code> …\nDetermines if this <code>Write</code>r has an efficient <code>write_vectored</code> …\nReturns an iterator over the lines of this reader.\nPull some bytes from this source into the specified …\nPull some bytes from this source into the specified buffer.\nReads the exact number of bytes required to fill <code>cursor</code>.\nReads the exact number of bytes required to fill <code>buf</code>.\nReads all bytes until a newline (the <code>0xA</code> byte) is reached, …\nReads all bytes until EOF in this source, placing them …\nReads all bytes until EOF in this source, appending them …\nReads all bytes into <code>buf</code> until the delimiter <code>byte</code> or EOF …\nLike <code>read</code>, except that it reads into a slice of buffers.\nRewind to the beginning of a stream.\nSeek to an offset, in bytes, in a stream.\nSeeks relative to the current position.\nSkips all bytes until the delimiter <code>byte</code> or EOF is reached.\nReturns an iterator over the contents of this reader split …\nReturns the length of this stream (in bytes).\nReturns the current seek position from the start of the …\nCreates an adapter which will read at most <code>limit</code> bytes …\nWrites a buffer into this writer, returning how many bytes …\nAttempts to write an entire buffer into this writer.\nAttempts to write multiple buffers into this writer.\nWrites a formatted string into this writer, returning any …\nLike <code>write</code>, except that it writes from a slice of buffers.\nOpérations du cache LRU\nRécupère une valeur et la marque comme récemment …\nAjoute ou met à jour une valeur, supprime l’élément …")